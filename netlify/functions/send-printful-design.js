require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)
const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.handler = async ({ body, headers }) => {
  try {
    // check the webhook to make sure it’s valid
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    )

    // only do stuff if this is a successful Stripe Checkout purchase
    if (stripeEvent.type === "payment_intent.succeeded") {
      const eventObject = stripeEvent.data.object
      const shippingDetails = eventObject.shipping
      console.log(eventObject)

      // TODO: hit Printful API with an order using stripe shipping details
      // fetch("https://api.printful.com/orders")
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    }
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`)

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    }
  }
}
