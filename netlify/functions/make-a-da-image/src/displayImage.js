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
}

const App = () => {
  return (
    <>
      <Fonts />
      <Box
        width="3550px"
        fontFamily="Helvetica Neue, sans-serif"
        fontWeight={500}
        textAlign="center"
        color="white"
        height="100vh"
      >
        <Textfit mode="single" max={3550}>
          ${window.ticker}
        </Textfit>
        <Textfit mode="single" max={3550}>
          {window.average} AVG
        </Textfit>
      </Box>
    </>
  )
}

render(<App />, document.getElementById("image-wrapper"))
