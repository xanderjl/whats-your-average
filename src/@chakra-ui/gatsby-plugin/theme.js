import { extendTheme } from "@chakra-ui/react"

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
})

export default theme
