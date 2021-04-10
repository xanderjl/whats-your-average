import * as React from "react"
import PropTypes from "prop-types"
import { Box, Flex, Text } from "@chakra-ui/layout"
import Fonts from "@/fonts"
import Navbar from "@/components/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Fonts />
      <Flex direction="column" minW="100%" minH="100vh">
        <Navbar />
        <Box as="main" flex={1} p={{ base: "3rem 1.25rem", md: "9rem 3rem" }}>
          {children}
        </Box>
        <Flex as="footer" align="center" justify="center">
          <Text>© {new Date().getFullYear()}, What's Your Average?</Text>
        </Flex>
      </Flex>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
