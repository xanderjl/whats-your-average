import React from "react"
import { render } from "react-dom"
import Textfit from "react-textfit"
import { Box, Heading } from "@chakra-ui/layout"

const styles = {
  w: "inherit",
  color: "white",
  fontFamily: "sans-serif",
}

const App = () => {
  return (
    <Box width="100vw" height="100vh">
      <Heading {...styles}>
        <Textfit mode="single" max={5000}>
          $ {window.ticker}
        </Textfit>
      </Heading>
      <Heading {...styles}>
        <Textfit mode="single" max={5000}>
          {window.average} AVG
        </Textfit>
      </Heading>
    </Box>
  )
}

render(<App />, document.getElementById("image-wrapper"))
