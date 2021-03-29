import React, { useReducer } from "react"
import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  NumberInput,
  NumberInputField,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useShoppingCart } from "use-shopping-cart"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { StaticImage } from "gatsby-plugin-image"

const initState = {
  ticker: "WYAV",
  average: "10.00",
  size: "md",
  quantity: 1,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ticker":
      return { ...state, ticker: action.e.target.value }
    case "average":
      return { ...state, average: action.value }
    case "size":
      return { ...state, size: action.e.target.value }
    case "quantity":
      return { ...state, quantity: action.e.target.value }
    default:
      throw new Error()
  }
}

const sizes = ["sm", "md", "lg", "xl", "2xl"]
const shirtQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const inputStyles = {
  variant: "flushed",
  _placeholder: {
    color: "gray.300",
  },
  maxW: "10ch",
}

const inputFieldStyles = {
  align: "center",
  justify: "center",
}

const headingStyles = {
  fontSize: "xl",
  fontWeight: 600,
  pr: "0.5rem",
}

const IndexPage = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  const { ticker, average, size, quantity } = state
  const { addItem } = useShoppingCart()

  return (
    <Layout>
      <SEO title="Home" />
      <Container maxW="container.md">
        <Heading as="h1" size="2xl" textAlign="center" pb="1rem">
          WHAT'S YOUR AVERAGE?
        </Heading>
        <VStack align="center" spacing={24}>
          <VStack align="flex-start" spacing={1}>
            <Flex {...inputFieldStyles}>
              <Text {...headingStyles}>TICKER:</Text>
              <InputGroup>
                <InputLeftElement>$</InputLeftElement>
                <Input
                  maxLength={4}
                  textTransform="uppercase"
                  variant="flushed"
                  value={ticker}
                  {...inputStyles}
                  onChange={e => dispatch({ type: "ticker", e })}
                />
              </InputGroup>
            </Flex>
            <Flex {...inputFieldStyles}>
              <Text {...headingStyles}>AVERAGE COST:</Text>
              <NumberInput
                precision={2}
                variant="flushed"
                value={average}
                onChange={value => dispatch({ type: "average", value })}
              >
                <NumberInputField maxLength={6} {...inputStyles} />
                <InputRightElement>AVG</InputRightElement>
              </NumberInput>
            </Flex>
          </VStack>
          <Flex align="center">
            <StaticImage
              src="https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png"
              alt={`Custom "What's Your Average" t-shirt.`}
              width={400}
              height={400}
            />
            <VStack align="flex-start" spacing={2} pl={{ base: 0, md: "2rem" }}>
              <Flex align="center">
                <Text {...headingStyles}>SIZE:</Text>
                <Select
                  variant="flushed"
                  textTransform="uppercase"
                  value={size}
                  onChange={e => dispatch({ type: "size", e })}
                >
                  {sizes.map((size, i) => (
                    <option key={i} value={size}>
                      {size}
                    </option>
                  ))}
                </Select>
              </Flex>
              <Flex align="center" pb="2rem">
                <Text {...headingStyles}>QUANTITY:</Text>
                <Select
                  variant="flushed"
                  textTransform="uppercase"
                  value={quantity}
                  onChange={e => dispatch({ type: "quantity", e })}
                >
                  {shirtQuantity.map((quantity, i) => (
                    <option key={i} value={quantity}>
                      {quantity}
                    </option>
                  ))}
                </Select>
              </Flex>
              <VStack>
                <Button
                  variant="outline"
                  borderRadius={0}
                  p="0.5rem"
                  fontSize="xl"
                  fontWeight={600}
                  _hover={{ bg: "white", color: "black" }}
                  onClick={() =>
                    addItem(
                      {
                        name: "Custom WYA T-shirt",
                        description: `Customized t-shirt. Reads: $${ticker} / ${average} AVG`,
                        id: "",
                        price: 2300,
                        currency: "USD",
                        image: "",
                      },
                      quantity
                    )
                  }
                >
                  ADD TO CART
                </Button>
              </VStack>
            </VStack>
          </Flex>
        </VStack>
      </Container>
    </Layout>
  )
}

export default IndexPage
