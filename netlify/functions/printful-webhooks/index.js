require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.handler = async ({ body }) => {
  const { type, data } = body
  const templates = {
    order_created: "d-7240134797ab443c898a0529d685ee73",
  }

  if (type === "order_created") {
    const {
      shipping,
      created,
      updated,
      recipient,
      items,
      incomeplete_items,
      costs,
      retail_costs,
      pricing_breakdown,
      shipments,
      gift,
      packing_slip,
    } = data.order

    const msg = {
      to: "alexanderjameslow@gmail.com",
      // to: recipient.email,
      from: process.env.FROM_EMAIL_ADDRESS,
      templateId: templates[type],
      // dynamicTemplateData: {
      //   name: recipient.name,
      // },
    }
    sgMail.send({})
  }
  // else if (type === "order_canceled") {
  // } else if (type === "order_failed") {
  // } else if (type === "package_shipped") {
  // } else if (type === "package_returned") {
  // }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }
}
