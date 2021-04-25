require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.handler = async ({ body }) => {
  console.log(body)
  let type
  let data

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
    shipping,
    recipient,
    items,
    incomplete_items,
    retail_costs,
    shipments,
    gift,
    packing_slip,
  } = data

  const templates = {
    order_created: "d-7240134797ab443c898a0529d685ee73",
    order_canceled: "d-284f69e35a4c41b89c8a2c7c2422f620",
    order_failed: "",
    package_shipped: "",
    package_returned: "",
  }
  const msg = {
    to: "alexanderjameslow@gmail.com",
    // to: recipient.email,
    from: process.env.FROM_EMAIL_ADDRESS,
    templateId: templates[type],
    dynamicTemplateData: {
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
    await sgMail
      .send(msg)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  } else if (type === "order_canceled" || "order_failed") {
    const { reason } = data
    const message = {
      ...msg,
      dynamicTemplateData: { ...dynamicTemplateData, reason },
    }

    await sgMail
      .send(message)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  } else if (type === "package_shipped") {
    const { shipment } = data
    const message = {
      ...msg,
      dynamicTemplateData: { ...dynamicTemplateData, shipment },
    }

    await sgMail
      .send(message)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  } else if (type === "package_returned") {
    const { shipment, reason } = data
    const message = {
      ...msg,
      dynamicTemplateData: { ...dynamicTemplateData, shipment, reason },
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
