import React from "react"
import Layout from "@/components/Layout"
import { Box } from "@chakra-ui/layout"
import Textfit from "react-textfit"
import { Heading } from "@chakra-ui/layout"

const Fuck = () => {
  return (
    <Layout>
      <Box w={3600} h={5400} bg="green">
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
              $WWA
            </Textfit>
          </Heading>
          <Heading fontWeight={600}>
            <Textfit mode="single" max={1300} lineHeight="60rem">
              19.00 AVG
            </Textfit>
          </Heading>
        </Box>
      </Box>
    </Layout>
  )
}

export default Fuck
