import * as React from "react"
import Layout from "@/components/Layout"
import { Heading, Container } from "@chakra-ui/react"
import { useShoppingCart } from "use-shopping-cart"

const Success = () => {
  const { clearCart } = useShoppingCart()
  clearCart()
  return (
    <Layout>
      <Container maxW="container.md">
        <Heading>YOU DID IT. THANKS FOR THE MONEY!</Heading>
      </Container>
    </Layout>
  )
}

export default Success
