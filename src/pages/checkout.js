import * as React from "react"
import { useShoppingCart } from "use-shopping-cart"
import Layout from "@components/layout"
import {
  Box,
  Container,
  Grid,
  VStack,
  GridItem,
  Heading,
} from "@chakra-ui/react"
import CheckoutForm from "@components/checkoutForm"
import OrderSummaryTable from "../components/orderSummaryTable"

const Checkout = () => {
  const { cartDetails } = useShoppingCart()
  const tableDetails = Object.values(cartDetails)
  return (
    <Layout>
      <Container maxW="container.xl" m="0 auto">
        <Grid
          templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(5, 1fr)" }}
          gap={12}
        >
          <GridItem colSpan={{ base: 1, md: 3 }}>
            <Heading size="md" pb="1rem" textTransform="uppercase">
              Order Summary:
            </Heading>
            <OrderSummaryTable tableDetails={tableDetails} />
          </GridItem>
          <GridItem
            colSpan={{ base: 1, md: 2 }}
            border="1px solid white"
            p="1.25rem"
          >
            <Heading size="md" pb="1rem" textTransform="uppercase">
              Checkout Form:
            </Heading>
            <CheckoutForm />
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Checkout
