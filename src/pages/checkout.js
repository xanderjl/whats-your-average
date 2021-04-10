import * as React from "react"
import { useShoppingCart } from "use-shopping-cart"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { Container, Grid, GridItem, Heading } from "@chakra-ui/react"
import Layout from "@/components/Layout"
import CheckoutForm from "@/components/CheckoutForm"
import OrderSummaryTable from "@/components/OrderSummaryTable"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLIC_KEY)

const Checkout = () => {
  const { cartDetails } = useShoppingCart()
  const tableDetails = Object.values(cartDetails)

  return (
    <Elements stripe={stripePromise}>
      <Layout>
        <Container maxW="container.xl" m="0 auto">
          <Grid
            templateColumns={{ base: "minmax(0, 1fr)", xl: "repeat(5, 1fr)" }}
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
              justifySelf={{ base: "initial", md: "center", lg: "initial" }}
            >
              <Heading size="md" pb="1rem" textTransform="uppercase">
                Checkout Form:
              </Heading>
              <CheckoutForm
                flex={1}
                minW={{ base: "100%", md: "600px", lg: "100%" }}
              />
            </GridItem>
          </Grid>
        </Container>
      </Layout>
    </Elements>
  )
}

export default Checkout
