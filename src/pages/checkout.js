import React, { useState } from "react"
import { useShoppingCart } from "use-shopping-cart"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { Box, Container, Heading, VStack } from "@chakra-ui/react"
import Layout from "@/components/Layout"
import CheckoutForm from "@/components/CheckoutForm"
import OrderSummaryTable from "@/components/OrderSummaryTable"
import SEO from "@/components/SEO"
import Link from "@/components/Link"
import csc from "country-state-city"
import { useForm } from "react-hook-form"
import shipping from "@/util/shipping"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLIC_KEY)

const acceptedCountries = ["CA", "US", "AU"]
const countryInfo = acceptedCountries.map(
  country => csc.getAllCountries().filter(c => c.isoCode === country)[0]
)

const Checkout = () => {
  const [country, setCountry] = useState(acceptedCountries[0])
  const [state, setState] = useState("")
  const { setValue } = useForm()

  const countryHandler = e => {
    setValue("country", e.target.value)
    setCountry(e.target.value)
  }
  const stateHandler = e => {
    setValue("state", e.target.value)
    setState(e.target.value)
  }

  const { cartDetails, cartCount, totalPrice, removeItem } = useShoppingCart()
  const tableDetails = Object.values(cartDetails)
  const addedShipping = shipping(country, cartCount)

  return (
    <Elements stripe={stripePromise}>
      <Layout>
        <SEO title="Checkout" />
        <Container maxW="container.md" m="0 auto">
          <VStack alignItems="stretch" justifyContent="stretch" spacing={12}>
            <Box>
              <Heading size="xl" pb="1rem" textTransform="uppercase">
                Order Summary:
              </Heading>
              <OrderSummaryTable
                details={tableDetails}
                addedShipping={addedShipping}
                cartCount={cartCount}
                totalPrice={totalPrice}
                removeItem={removeItem}
              />
            </Box>
            <Box border="1px solid white" p="1.25rem">
              <Heading size="md" pb="1rem" textTransform="uppercase">
                Checkout:
              </Heading>
              {cartCount > 0 ? (
                <CheckoutForm
                  country={country}
                  state={state}
                  countryHandler={countryHandler}
                  stateHandler={stateHandler}
                  countryInfo={countryInfo}
                  totalPrice={totalPrice}
                  addedShipping={addedShipping}
                  cartDetails={cartDetails}
                />
              ) : (
                <Link to="/">
                  <Heading
                    size="md"
                    textDecoration="underline"
                    textTransform="uppercase"
                  >
                    Your cart can't be empty
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
