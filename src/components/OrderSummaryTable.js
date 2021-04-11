import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import * as React from "react"
import { useShoppingCart } from "use-shopping-cart"

const OrderSummaryTable = props => {
  const { removeItem } = useShoppingCart()

  return (
    <Table size="md" {...props}>
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
        {props.details.map(item => {
          const { name, description, quantity, formattedValue, id } = item

          return (
            <Tr key={id}>
              <Td>{name}</Td>
              <Td display={{ base: "none", md: "block" }}>{description}</Td>
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
  )
}

export default OrderSummaryTable
