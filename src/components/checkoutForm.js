import * as React from "react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react"
import { useShoppingCart } from "use-shopping-cart"

const formControlStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}

const formLabelStyles = {
  flex: 1,
  minw: "10ch",
  marginBottom: 0,
}

const inputStyles = {
  variant: "flushed",
  minW: "calc(100% - 10ch)",
  p: "0.5rem",
}

const CheckoutForm = props => {
  const stripe = useStripe()
  const elements = useElements()
  const { cartDetails } = useShoppingCart()

  fetch("./.netlify/create-payment-intent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartDetails),
  })

  const stripeSubmit = async e => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    const cardElement = elements.getElement(CardElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    })

    if (error) {
      console.log({ error })
    } else {
      console.log({ paymentMethod })
    }
  }

  return (
    <VStack as="form" spacing={8} {...props}>
      <FormControl {...formControlStyles}>
        <FormLabel {...formLabelStyles}>Name</FormLabel>
        <Input name="name" {...inputStyles} />
      </FormControl>
      <FormControl {...formControlStyles}>
        <FormLabel {...formLabelStyles}>Email</FormLabel>
        <Input type="email" name="email" {...inputStyles} />
      </FormControl>
      <FormControl {...formControlStyles}>
        <FormLabel {...formLabelStyles}>Phone</FormLabel>
        <Input name="phone" {...inputStyles} />
      </FormControl>
      <FormControl {...formControlStyles}>
        <FormLabel {...formLabelStyles}>Card Details</FormLabel>
        <Box
          flex={1}
          minW="calc(100% - 6ch)"
          pb="0.5rem"
          borderBottom="1px solid white"
        >
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "white",
                  iconColor: "white",
                  "::placeholder": {
                    color: "white",
                  },
                },
              },
            }}
          />
        </Box>
      </FormControl>
      <FormControl {...formControlStyles}>
        <Button type="submit" variant="outline">
          Place Order
        </Button>
      </FormControl>
    </VStack>
  )
}

export default CheckoutForm
