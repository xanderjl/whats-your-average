import * as React from "react"
import { navigate } from "gatsby"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
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
  const { totalPrice } = useShoppingCart()
  const toast = useToast()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const cardElement = elements.getElement(CardElement)

      fetch("/.netlify/functions/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(totalPrice),
      })
        .then(res => res.json())
        .then(data => {
          stripe
            .confirmCardPayment(data.clientSecret, {
              payment_method: {
                card: cardElement,
              },
            })
            .then(result => {
              if (result.error) {
                toast({
                  title: "UH OH, SOMETHING WENT WRONG.",
                  description: result.error.message,
                  status: "error",
                  duration: 10000,
                  isClosable: true,
                })
              } else {
                navigate("/success")
              }
            })
        })
        .catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <VStack as="form" spacing={8} {...props} onSubmit={handleSubmit}>
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
        <Button type="submit" disabled={!stripe} variant="outline">
          Place Order
        </Button>
      </FormControl>
    </VStack>
  )
}

export default CheckoutForm
