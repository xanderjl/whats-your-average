import * as React from "react"
import Layout from "@/components/Layout"
import { Heading, Container } from "@chakra-ui/react"
import { useShoppingCart } from "use-shopping-cart"
import ReactPixel from "react-facebook-pixel"

ReactPixel.pageView()
ReactPixel.fbq("track", "PageView")

const Success = () => {
  const { clearCart, formattedTotalPrice } = useShoppingCart()
  ReactPixel.track("Purchase", {
    currency: "CAD",
    value: formattedTotalPrice,
  })
  clearCart()
  return (
    <Layout>
      <Container maxW="container.md">
        <Heading>HEY, YOU DID IT. THANKS FOR THE MONEY!</Heading>
      </Container>
    </Layout>
  )
}

export default Success
