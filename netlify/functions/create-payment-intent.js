require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)

exports.handler = async ({ body }) => {
  const { totalPrice, values } = JSON.parse(body)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalPrice,
    currency: "cad",
    payment_method_types: ["card"],
    receipt_email: values?.email || "",
    shipping: {
      name: values?.name || "",
      phone: values?.phone || "",
      address: {
        city: values?.city || "",
        country: values?.country || "",
        line1: values?.address || "",
        line2: values?.addres_2 || "",
        postal_code: values?.postal_code || "",
        state: values?.state || "",
      },
    },
  })

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: JSON.stringify({
      clientSecret: paymentIntent.client_secret,
    }),
  }
}
