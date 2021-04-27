import * as React from "react"
import { render } from "react-dom"
import Textfit from "react-textfit"
import { Box } from "@chakra-ui/layout"
import Fonts from "./fonts"

const styles = {
  w: "inherit",
  pb: 0,
  color: "white",
  fontFamily: "Helvetica Neue, sans-serif",
}

const App = () => {
  return (
    <Box width="3600px">
      <Fonts />
      <Box
        m="0 auto"
        width="3450px"
        fontFamily="Helvetica Neue, sans-serif"
        fontWeight={500}
        textAlign="center"
        color="white"
        height="100vh"
      >
        <Heading fontWeight={600} lineHeight="60rem">
          <Textfit mode="single" max={1300}>
            ${window.ticker}
          </Textfit>
        </Heading>
        <Heading fontWeight={600}>
          <Textfit mode="single" max={1300} lineHeight="60rem">
            {window.average} AVG
          </Textfit>
        </Heading>
      </Box>
    </Box>
  )
}

render(<App />, document.getElementById("image-wrapper"))
