import * as React from "react"
import { render } from "react-dom"
import Textfit from "react-textfit"
import { Box, Heading } from "@chakra-ui/layout"
import Fonts from "./fonts"

const styles = {
  w: "inherit",
  pb: 0,
  color: "white",
  fontFamily: "Helvetica Neue, sans-serif",
  fontWeight: 500,
  // lineHeight: "70rem",
}

const App = () => {
  return (
    <Box width="100%">
      <Fonts />
      <Box
        m="0 auto"
        width="100%"
        fontFamily="Helvetica Neue, sans-serif"
        fontWeight={500}
        textAlign="center"
        height="100vh"
      >
        <Heading {...styles}>
          <Textfit mode="single" max={1300}>
            ${window.ticker}
          </Textfit>
        </Heading>
        <Heading {...styles}>
          <Textfit mode="single" max={1300}>
            {window.average} AVG
          </Textfit>
        </Heading>
      </Box>
    </Box>
  )
}

render(<App />, document.getElementById("image-wrapper"))
