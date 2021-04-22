import {
  Button,
  Heading,
  StackDivider,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react"
import * as React from "react"
import { useShoppingCart } from "use-shopping-cart"

const OrderSummaryTable = props => {
  const { removeItem } = useShoppingCart()

  return (
    <>
      <Table display={{ base: "none", md: "table" }} size="md" {...props}>
        <Thead w="inherit" textTransform="uppercase">
          <Tr>
            <Th color="white">Product</Th>
            <Th color="white">Description</Th>
            <Th color="white">Quantity</Th>
            <Th color="white">Price</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody w="inherit">
          {props.details.map(item => {
            const { name, description, quantity, formattedValue, id } = item

            return (
              <Tr key={id}>
                <Td>{name}</Td>
                <Td>{description}</Td>
                <Td>{quantity}</Td>
                <Td>{formattedValue}</Td>
                <Td>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem(id)}
                  >
                    Remove
                  </Button>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
      <VStack
        align="flex-start"
        spacing={8}
        display={{ base: "flex", md: "none" }}
        divider={<StackDivider color="white" />}
      >
        {props.details.map(item => {
          const { name, description, quantity, formattedValue, id } = item
          return (
            <VStack align="flex-start" key={id} spacing={2}>
              <Heading size="md">{name}</Heading>
              <Text>{description}</Text>
              <Text>Quantity: {quantity}</Text>
              <Text>Price: {formattedValue}</Text>
              <Button
                flex={1}
                maxW="max-content"
                variant="outline"
                size="sm"
                onClick={() => removeItem(id)}
              >
                Remove
              </Button>
            </VStack>
          )
        })}
      </VStack>
    </>
  )
}

export default OrderSummaryTable
