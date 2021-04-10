import * as React from "react"
import { useShoppingCart } from "use-shopping-cart"
import { Container, Flex, Heading, Icon } from "@chakra-ui/react"
import { FiShoppingCart } from "react-icons/fi"
import Link from "@/components/Link"

const links = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "FAQ",
    slug: "/faq",
  },
]

const linkStyles = {
  _hover: {
    bg: "white",
    color: "black",
  },
}

const Navbar = () => {
  const { cartCount } = useShoppingCart()
  return (
    <Flex>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link to="/">
            <Heading fontWeight={600} p="0.75rem" {...linkStyles}>
              WYA?
            </Heading>
          </Link>
          <Flex>
            {links.map((link, i) => (
              <Link key={i} to={link.slug} p="1.25rem" {...linkStyles}>
                {link.title}
              </Link>
            ))}
            <Link to="/checkout" p="1.25rem" {...linkStyles}>
              Checkout ({cartCount}) <Icon as={FiShoppingCart} />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Navbar
