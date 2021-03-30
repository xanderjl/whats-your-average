import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import * as React from "react"
import { useShoppingCart } from "use-shopping-cart"

const OrderSummaryTable = ({ tableDetails }) => {
  const { removeItem } = useShoppingCart()

  return (
    <Table size="md">
      <Thead w="inherit" textTransform="uppercase">
        <Tr>
          <Th color="white">Product</Th>
          <Th color="white" display={{ base: "none", md: "block" }}>
            Description
          </Th>
          <Th color="white">Quantity</Th>
          <Th color="white">Price</Th>
          <Th />
        </Tr>
      </Thead>
      <Tbody w="inherit">
        {tableDetails.map(item => {
          const { name, description, quantity, price, id } = item
          return (
            <Tr key={id}>
              <Td>{name}</Td>
              <Td display={{ base: "none", md: "block" }}>{description}</Td>
              <Td>{quantity}</Td>
              <Td>${(price / 100).toFixed(2)}</Td>
              <Td>
                <Button
                  variant="outline"
                  borderRadius={0}
                  p="0.5rem"
                  size="sm"
                  fontSize="lg"
                  fontWeight={400}
                  _hover={{ bg: "white", color: "black" }}
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
  )
}

export default OrderSummaryTable
