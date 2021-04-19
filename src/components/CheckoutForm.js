import * as React from "react"
import { navigate } from "gatsby"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { useShoppingCart } from "use-shopping-cart"

const formLabelStyles = {
  flex: 1,
  minw: "10ch",
  marginBottom: 0,
}

const inputStyles = {
  variant: "flushed",
  p: "0.5rem",
}

const CheckoutForm = props => {
  const stripe = useStripe()
  const elements = useElements()
  const { totalPrice, cartDetails } = useShoppingCart()
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async values => {
    try {
      const cardElement = elements.getElement(CardElement)

      fetch("/.netlify/functions/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ totalPrice, values, cartDetails }),
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
    <VStack
      as="form"
      align="stretch"
      spacing={8}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={errors.name}>
        <FormLabel {...formLabelStyles}>Name</FormLabel>
        <Input
          name="name"
          {...inputStyles}
          {...register("name", { required: true })}
        />
        <FormErrorMessage>
          {errors.name && "This field is required."}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.email}>
        <FormLabel {...formLabelStyles}>Email</FormLabel>
        <Input
          type="email"
          name="email"
          {...inputStyles}
          {...register("email", { required: true })}
        />
        <FormErrorMessage>
          {errors.email && "This field is required."}
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel {...formLabelStyles}>Phone</FormLabel>
        <Input name="phone" {...inputStyles} {...register("phone")} />
      </FormControl>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 8, md: 4 }}
      >
        <FormControl isInvalid={errors.city}>
          <FormLabel {...formLabelStyles}>City</FormLabel>
          <Input
            name="city"
            {...inputStyles}
            {...register("city", { required: true })}
          />
          <FormErrorMessage>
            {errors.city && "This field is required."}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.country}>
          <FormLabel {...formLabelStyles}>Country</FormLabel>
          <Input
            name="country"
            {...inputStyles}
            {...register("country", { required: true })}
          />
          <FormErrorMessage>
            {errors.country && "This field is required."}
          </FormErrorMessage>
        </FormControl>
      </Stack>
      <Heading size="md">Address:</Heading>
      <FormControl isInvalid={errors.address}>
        <FormLabel {...formLabelStyles}>Line 1</FormLabel>
        <Input
          name="address"
          {...inputStyles}
          {...register("address", { required: true })}
        />
        <FormErrorMessage>
          {errors.address && "This field is required."}
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel {...formLabelStyles}>Line 2</FormLabel>
        <Input name="address_2" {...inputStyles} {...register("address_2")} />
      </FormControl>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 8, md: 4 }}
      >
        <FormControl isInvalid={errors.postal_code}>
          <FormLabel {...formLabelStyles}>Postal Code</FormLabel>
          <Input
            name="postal_code"
            {...inputStyles}
            {...register("postal_code", { required: true })}
          />
          <FormErrorMessage>
            {errors.postal_code && "This field is required."}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.state}>
          <FormLabel {...formLabelStyles}>State/Province Code</FormLabel>
          <Input
            name="state"
            maxLength={2}
            {...inputStyles}
            {...register("state", { required: true, maxLength: 2 })}
          />
          <FormErrorMessage>
            {errors.state && "This field is required."}
          </FormErrorMessage>
        </FormControl>
      </Stack>
      <FormControl>
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
      <FormControl>
        <Button
          type="submit"
          disabled={!stripe}
          variant="outline"
          isLoading={isSubmitting}
        >
          Place Order
        </Button>
      </FormControl>
    </VStack>
  )
}

export default CheckoutForm
