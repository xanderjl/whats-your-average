require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)

exports.handler = async ({ body }) => {
  const paymentIntent = await stripe.paymentIntents.create({
    // TODO: create cart total calculator
    amount: body,
    currency: "cad",
    payment_method_types: ["card"],
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
