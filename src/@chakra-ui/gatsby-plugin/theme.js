import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bg: "black",
        color: "white",
        fontSize: "lg",
        fontFamily: "Helvetica, sans-serif",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 0,
        p: "0.5rem",
        fontSize: "lg",
        fontWeight: 400,
        _hover: {
          bg: "white",
          color: "black",
        },
      },
    },
  },
  breakpoints,
})

export default theme
