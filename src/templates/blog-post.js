import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Blog from '../components/BlogLayout'

export default function Template({
  data, 
}) {
  const { markdownRemark: post } = data
  return (
    <Blog>
        <div className="blog-post-container">
            <Helmet> 
                <title>{`Tiffany's Techincal Blog: ${post.frontmatter.title}`}</title>
                <meta
                name="Tiffany's Techincal Blog"
                content={`Blog ${post.frontmatter.title}`} />
            </Helmet>

            <div className="inner blog">
                    <header className="major">
                        <h1>{post.frontmatter.title}</h1>
                        <h4>{post.frontmatter.date}</h4>
                    </header>
                    <div
                    className="blog"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    />
            </div>

        </div>
    </Blog>
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