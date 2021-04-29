import * as React from "react"
import Layout from "@/components/Layout"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import { Container } from "@chakra-ui/layout"
import SEO from "@/components/SEO"
import serializers from "@/lib/sanity/serializers"
import ReactPixel from "react-facebook-pixel"

ReactPixel.pageView()
ReactPixel.fbq("track", "PageView")

const FAQ = ({ data }) => {
  const { title, _rawBody } = data.sanityFaq
  return (
    <Layout>
      <SEO title={title} />
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
