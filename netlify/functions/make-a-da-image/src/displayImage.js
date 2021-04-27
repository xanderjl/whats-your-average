import React from "react"
import { render } from "react-dom"
import Textfit from "react-textfit"
import { Box, Heading } from "@chakra-ui/layout"
import Fonts from "./fonts"

const styles = {
  w: "inherit",
  color: "white",
  fontFamily: "Helvetica Neue, sans-serif",
}

const App = () => {
  return (
    <>
      <Fonts />
      <Box width="97vw" m="0 auto" height="100vh">
        <Heading {...styles}>
          <Textfit mode="single" max={5000}>
            ${window.ticker}
          </Textfit>
        </Heading>
        <Heading {...styles}>
          <Textfit mode="single" max={5000}>
            {window.average} AVG
          </Textfit>
        </Heading>
      </Box>
    </>
  )
}

render(<App />, document.getElementById("image-wrapper"))
