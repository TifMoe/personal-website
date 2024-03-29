import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import BlogLayout from '../components/BlogLayout'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <BlogLayout>
      <div className="blog-post-container">
        <Helmet>
          <title>{`Tiffany's Techincal Blog: ${post.frontmatter.title}`}</title>
          <meta
            name="Tiffany's Techincal Blog"
            content={`Blog ${post.frontmatter.title}`}
          />
        </Helmet>

        <div className="inner flex">
          <header className="major">
            <h1>{post.frontmatter.title}</h1>
            <h4>{post.frontmatter.date}</h4>
          </header>
          <div
            className="inner blog flex"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </BlogLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
