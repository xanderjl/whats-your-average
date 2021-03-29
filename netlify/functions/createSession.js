exports.handler = async function (event, context) {
  // TODO: Implement Stripe session func

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  }
}
