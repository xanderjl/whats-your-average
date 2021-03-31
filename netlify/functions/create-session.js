require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)

exports.handler = async ({ body }) => {
  // TODO: Implement Stripe session func
  const data = JSON.parse(body)
  // const items = data.items

  // const calculateOrderAmount = items => {
  //   // TODO: write a real total calculator :)
  //   return 1400
  // }

  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: calculateOrderAmount(items),
  //   currency: "CAD",
  // })

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    // body: JSON.stringify({
    //   clientSecret: paymentIntent.client_secret,
    // }),
    body: JSON.stringify(body, null, 2),
  }
}
