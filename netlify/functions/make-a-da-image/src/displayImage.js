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
        width="3550px"
        fontFamily="Helvetica Neue, sans-serif"
        fontWeight={500}
        textAlign="center"
        color="white"
        height="100vh"
      >
        <Textfit mode="single" max={3400}>
          ${window.ticker}
        </Textfit>
        <Textfit mode="single" max={3400}>
          {window.average} AVG
        </Textfit>
      </Box>
    </Box>
  )
}

render(<App />, document.getElementById("image-wrapper"))
