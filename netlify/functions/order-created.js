exports.handler = async ({ body }) => {
  console.log(body)

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }
}
