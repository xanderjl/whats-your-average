import * as React from "react"
import Layout from "@/components/Layout"
import { Heading } from "@chakra-ui/layout"
import { useShoppingCart } from "use-shopping-cart"

const Success = () => {
  const { clearCart } = useShoppingCart()
  clearCart()
  return (
    <Layout>
      <Heading>YOU DID IT. THANKS FOR THE MONEY!</Heading>
    </Layout>
  )
}

export default Success
