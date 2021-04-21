import * as React from "react"
import { useShoppingCart } from "use-shopping-cart"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { Box, Container, Heading, toast, VStack } from "@chakra-ui/react"
import Layout from "@/components/Layout"
import CheckoutForm from "@/components/CheckoutForm"
import OrderSummaryTable from "@/components/OrderSummaryTable"
import SEO from "@/components/SEO"
import Link from "@/components/Link"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLIC_KEY)

const Checkout = () => {
  const { cartDetails, cartCount } = useShoppingCart()
  const tableDetails = Object.values(cartDetails)

  return (
    <Elements stripe={stripePromise}>
      <Layout>
        <SEO title="Checkout" />
        <Container maxW="container.md" m="0 auto">
          <VStack alignItems="stretch" justifyContent="stretch" spacing={12}>
            <Box>
              <Heading size="md" pb="1rem" textTransform="uppercase">
                Order Summary:
              </Heading>
              <OrderSummaryTable details={tableDetails} />
            </Box>
            <Box border="1px solid white" p="1.25rem">
              <Heading size="md" pb="1rem" textTransform="uppercase">
                Checkout:
              </Heading>
              {cartCount > 0 ? (
                <CheckoutForm />
              ) : (
                <Link to="/">
                  <Heading
                    size="md"
                    textDecoration="underline"
                    textTransform="uppercase"
                  >
                    Your can't be empty
                  </Heading>
                </Link>
              )}
            </Box>
          </VStack>
        </Container>
      </Layout>
    </Elements>
  )
}

export default Checkout
