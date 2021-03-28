import * as React from "react"
import { Container, Flex, Heading } from "@chakra-ui/react"
import Link from "@components/link"

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

const Navbar = () => {
  return (
    <Flex>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link>
            <Heading fontWeight={600} p="0.75rem">
              WYA?
            </Heading>
          </Link>
          <Flex>
            {links.map((link, i) => (
              <Link
                key={i}
                to={link.slug}
                p="1.25rem"
                _hover={{
                  bg: "white",
                  color: "black",
                }}
              >
                {link.title}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Navbar
