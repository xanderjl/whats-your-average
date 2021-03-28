import * as React from "react"
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

const inputStyles = {
  variant: "flushed",
  maxW: "10ch",
  _placeholder: {
    color: "gray.300",
  },
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

const IndexPage = () => (
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
            <InputGroup maxW="max-content">
              <InputLeftElement>$</InputLeftElement>
              <Input
                maxLength={4}
                textTransform="uppercase"
                variant="flushed"
                defaultValue="WYAV"
                {...inputStyles}
              />
            </InputGroup>
          </Flex>
          <Flex {...inputFieldStyles}>
            <Text {...headingStyles}>AVERAGE COST:</Text>
            <NumberInput
              precision={2}
              variant="flushed"
              defaultValue={10}
              {...inputStyles}
            >
              <NumberInputField />
              <InputRightElement>AVG</InputRightElement>
            </NumberInput>
          </Flex>
        </VStack>
      </Flex>
    </Container>
  </Layout>
)

export default IndexPage
