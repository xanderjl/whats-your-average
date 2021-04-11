import React, { useState } from "react"
import { Container, Flex, Heading } from "@chakra-ui/react"
import Link from "@/components/Link"
import NavbarLinks from "./NavbarLinks"
import ToggleButton from "./ToggleButton"

const linkStyles = {
  _hover: {
    bg: "white",
    color: "black",
  },
}

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <Flex>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link to="/">
            <Heading fontWeight={600} p="0.5rem" {...linkStyles}>
              WYA?
            </Heading>
          </Link>
          <ToggleButton isOpen={isOpen} clickHandler={() => setOpen(!isOpen)} />
          <NavbarLinks isOpen={isOpen} />
        </Flex>
      </Container>
    </Flex>
  )
}

export default Navbar
