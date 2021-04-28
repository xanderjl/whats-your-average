require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.handler = async ({ body }) => {
  let type
  let data

  // const test = JSON.parse(body)
  // console.log(JSON.stringify(test, null, 2))

  try {
    ;({ type, data } = JSON.parse(body)) //re-descture type and data from body (adds that bonkers semicolon)
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: "oops",
    }
  }

  const {
    id,
    shipping,
    recipient,
    items,
    incomplete_items,
    retail_costs,
    shipments,
    gift,
    packing_slip,
  } = data.order

  const templates = {
    order_created: "d-7240134797ab443c898a0529d685ee73",
    order_canceled: "d-284f69e35a4c41b89c8a2c7c2422f620",
    order_failed: "d-39fa7ff4e42b480d8f75ec502fa1072f",
    package_shipped: "d-0552ae85e4a44fb593ca8d1d8ebb63ef",
    package_returned: "d-2c67411b633641129df89fbdffaaf9b9",
  }

  const msg = {
    to: recipient.email,
    from: process.env.FROM_EMAIL_ADDRESS,
    templateId: templates[type],
    dynamicTemplateData: {
      subject: `${type} (noreply)`,
      id,
      recipient,
      shipping,
      items,
      incomplete_items,
      retail_costs,
      shipments,
      gift,
      packing_slip,
    },
  }

  if (type === "order_created") {
    const message = {
      ...msg,
      dynamicTemplateData: {
        ...msg.dynamicTemplateData,
        subject: `Your order has been created! (noreply)`,
      },
    }

    await sgMail
      .send(message)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  } else if (["order_canceled", "order_failed"].includes(type)) {
    const { reason } = data

    const message = {
      ...msg,
      dynamicTemplateData: { ...msg.dynamicTemplateData, reason },
    }

    await sgMail
      .send(message)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  } else if (type === "package_shipped") {
    const { shipment } = data

    const { shipments } = msg.dynamicTemplateData

    const message = {
      ...msg,
      dynamicTemplateData: {
        ...msg.dynamicTemplateData,
        subject: `Your order No. ${id} has been shipped`,
        shipment,
        carrier: shipments[0].carrier,
        service: shipments[0].service,
        tracking_number: shipments[0].tracking_number,
        tracking_url: shipments[0].tracking_url,
        ship_date: shipments[0].ship_date,
        shipped_at: new Date(shipments[0].shipped_at).toLocaleString(),
        location: shipments[0].location,
        packing_slip_url: shipments[0].packing_slip_url,
        estimated_delivery_dates: {
          from: new Date(
            shipments[0].estimated_delivery_dates.from
          ).toLocaleString(),
          to: new Date(
            shipments[0].estimated_delivery_dates.to
          ).toLocaleString(),
        },
      },
    }

    await sgMail
      .send(message)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  } else if (type === "package_returned") {
    const { shipment, reason } = data

    const message = {
      ...msg,
      dynamicTemplateData: { ...msg.dynamicTemplateData, shipment, reason },
    }

    await sgMail
      .send(message)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }
}
