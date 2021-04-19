require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)

exports.handler = async ({ body }) => {
  const { totalPrice, values, cartDetails } = JSON.parse(body)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalPrice,
    currency: "cad",
    payment_method_types: ["card"],
    receipt_email: values?.email || null,
    shipping: {
      name: values?.name || null,
      phone: values?.phone || null,
      address: {
        city: values?.city || null,
        country: values?.country || null,
        line1: values?.address || null,
        line2: values?.addres_2 || null,
        postal_code: values?.postal_code || null,
        state: values?.state || null,
      },
    },
    metadata: {
      variant_id: Object.keys(cartDetails)[0],
      quantity: Object.values(cartDetails)[0].quantity,
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
