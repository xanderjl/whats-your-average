import React, { useReducer } from "react"
import {
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  NumberInput,
  NumberInputField,
  Text,
  VStack,
} from "@chakra-ui/react"
import Layout from "@components/layout"
import SEO from "@components/seo"

const initState = {
  ticker: "WYAV",
  average: 10,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ticker":
      return { ticker: (state.ticker = action.e.target.value) }
    case "average":
      return { average: (state.average = action.e.target.value) }
    default:
      throw new Error()
  }
}

const inputStyles = {
  variant: "flushed",
  _placeholder: {
    color: "gray.300",
  },
  maxW: "15ch",
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
  const { ticker, average } = state

  return (
    <Layout>
      <SEO title="Home" />
      <Container maxW="container.md">
        <Heading as="h1" size="2xl" textAlign="center" pb="1rem">
          WHAT'S YOUR AVERAGE?
        </Heading>
        <Flex justify="center">
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
              <NumberInput precision={2} variant="flushed">
                <NumberInputField
                  maxLength={6}
                  value={average}
                  {...inputStyles}
                  onChange={e => dispatch({ type: "average", e })}
                />
                <InputRightElement>AVG</InputRightElement>
              </NumberInput>
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Layout>
  )
}

export default IndexPage
