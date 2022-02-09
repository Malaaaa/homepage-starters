import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
// prettier-ignore
import {
  Container,
  Heading,
  Box
} from "../components/ui"
import * as styles from "./blog-post.css.ts"

export default function BlogPost(props) {
  const post = props.data.blogPost

  return (
    <Layout {...post} description={post.excerpt}>
      <Container>
        <Box paddingY={4}>
          {post.image && (
            <GatsbyImage alt={post.image.alt} image={getImage(post.image)} />
          )}
          <Heading as="h1">{post.title}</Heading>
          <div
            className={styles.blogPost}
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          />
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    blogPost(id: { eq: $id }) {
      id
      slug
      title
      html
      excerpt
      date
      image {
        id
        url
        gatsbyImageData
        alt
      }
    }
  }
`
