import * as React from "react"
import Layout from "@/components/Layout"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import { Container } from "@chakra-ui/layout"
import serializers from "@/lib/sanity/serializers"

const FAQ = ({ data }) => {
  const { title, _rawBody } = data.sanityFaq
  return (
    <Layout>
      <Container>
        <PortableText blocks={_rawBody} serializers={serializers} />
      </Container>
    </Layout>
  )
}

export const data = graphql`
  {
    sanityFaq {
      title
      _rawBody
    }
  }
`

export default FAQ
