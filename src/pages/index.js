import React, { useReducer } from "react"
import { navigate } from "gatsby"
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
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
import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import { StaticImage } from "gatsby-plugin-image"
import {
  variantIDs,
  quantities,
  variantsBySize,
  costBySize,
} from "@/lib/shirtDetails"
import { FiShoppingCart } from "react-icons/fi"

const initState = {
  ticker: "WYAV",
  average: "10.00",
  size: variantIDs[1].size,
  variant_id: variantIDs[1].variant_id,
  cost: variantIDs[1].cost,
  quantity: 1,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ticker":
      return { ...state, ticker: action.e.target.value.toUpperCase() }
    case "average":
      return { ...state, average: action.value }
    case "size":
      return {
        ...state,
        size: action.e.target.value,
        variant_id: variantsBySize[action.e.target.value],
        cost: costBySize[action.e.target.value],
      }
    case "quantity":
      return { ...state, quantity: action.e.target.value }
    default:
      throw new Error()
  }
}

const tickerStyles = ticker => {
  switch (ticker.length) {
    case 4:
      return {
        fontSize: "48px",
        y: 18,
      }
    case 3:
      return {
        fontSize: "60px",
        y: 24,
      }
    case 2:
      return {
        fontSize: "64px",
        y: 26,
      }
    default:
      return {
        fontSize: "72px",
        y: 32,
      }
  }
}
const averageStyles = average => {
  switch (average.length) {
    case 6:
      return {
        fontSize: "32px",
        y: 34,
      }
    case 5:
      return {
        fontSize: "34px",
        y: 36,
      }
    default:
      return {
        fontSize: "38px",
        y: 26,
      }
  }
}

const inputStyles = {
  variant: "flushed",
  _placeholder: {
    color: "gray.300",
  },
  maxW: "12ch",
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
  const { ticker, average, size, quantity, cost } = state
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
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Box pos="relative" m={{ base: "1.25rem 0", md: 0 }} bg="white">
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                w="50%"
                zIndex={10}
                pos="absolute"
                top="25%"
                left="50%"
                transform="translateX(-50%)"
              >
                <Heading fontSize={tickerStyles(ticker).fontSize}>
                  ${ticker}
                </Heading>
                <Heading fontSize={averageStyles(average).fontSize}>
                  {average} AVG
                </Heading>
              </Box>
              <Box maxW="100%" p="1.25rem">
                <StaticImage
                  src="../images/t-shirt.png"
                  alt={`Custom "What's Your Average" t-shirt.`}
                  layout="fixed"
                  placeholder="blurred"
                  width={400}
                />
              </Box>
            </Box>
            <VStack align="flex-start" spacing={2} pl={{ base: 0, md: "2rem" }}>
              <Flex align="center">
                <Text {...headingStyles}>SIZE:</Text>
                <Select
                  variant="flushed"
                  textTransform="uppercase"
                  defaultValue={size}
                  onChange={e => dispatch({ type: "size", e })}
                >
                  {variantIDs.map((variant, i) => {
                    return (
                      <Box
                        as="option"
                        color="black"
                        key={i}
                        value={variant.size}
                      >
                        {variant.size}
                      </Box>
                    )
                  })}
                </Select>
              </Flex>
              <Flex align="center">
                <Text {...headingStyles}>QUANTITY:</Text>
                <Select
                  variant="flushed"
                  textTransform="uppercase"
                  onChange={e => dispatch({ type: "quantity", e })}
                >
                  {quantities.map((quantity, i) => (
                    <Box as="option" color="black" key={i} value={quantity}>
                      {quantity}
                    </Box>
                  ))}
                </Select>
              </Flex>
              <Flex align="center" pb="2rem">
                <Text {...headingStyles}>
                  COST: ${(cost * quantity).toFixed(2)}
                </Text>
              </Flex>
              <VStack>
                <Button
                  variant="outline"
                  fontSize="xl"
                  fontWeight={600}
                  onClick={() => {
                    addItem(
                      {
                        name: "Custom WYA T-shirt",
                        description: `Customized t-shirt. Reads: $${ticker} / ${average} AVG`,
                        id: "",
                        price: cost * 100,
                        currency: "USD",
                        image: "",
                      },
                      parseInt(quantity)
                    )
                    navigate("/checkout")
                  }}
                >
                  ADD TO CART<Icon as={FiShoppingCart} ml="0.5rem" />
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
