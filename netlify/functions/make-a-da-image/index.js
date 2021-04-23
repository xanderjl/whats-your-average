const playwright = require("playwright-aws-lambda")
const fs = require("fs")
const path = require("path")
const script = fs.readFileSync(
  path.resolve(__dirname, "./displayImage.js"),
  "utf-8"
)

exports.handler = async ({ body }) => {
  console.log({ body })
  const browser = await playwright.launchChromium()
  const context = browser._defaultContext
  console.log(context)
  const page = await context.newPage()
  page.setViewportSize({
    width: 3600,
    height: 5400,
  })
  await page.setContent(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
      </head>
      <body>
      <div id="image-wrapper"><div>DOODOO</div></div>
      </body>
    </html> `)
  const { ticker, average } = JSON.parse(body)
  await page.addScriptTag({
    content: `
  window.ticker = "${ticker || "IDK"}";
  window.average = "${average || "2.00"}";
  `,
  })
  await page.addScriptTag({ content: script })
  const boundingRect = await page.evaluate(() => {
    const entryDiv = document.getElementById("image-wrapper")
    const { x, y, width, height } = entryDiv.children[0].getBoundingClientRect()
    return { x, y, width, height }
  })
  console.log({ boundingRect })

  const screenshotBuffer = await page.screenshot({
    clip: boundingRect,
    omitBackground: true,
  })
  await browser.close()
  return {
    isBase64Encoded: true,
    statusCode: 200,
    headers: {
      "Content-Type": "image/png",
      "Content-Length": screenshotBuffer.length.toString(),
    },
    body: screenshotBuffer.toString("base64"),
  }
}
