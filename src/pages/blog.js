import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import BannerBlog from '../components/BannerBlog'

const BlogIndex = props => {
  const { data } = props
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""
  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value
    const { data } = props
    // this is how we get all of our posts
    const posts = data.allMarkdownRemark.edges || []
    // return all filtered posts
    const filteredData = posts.filter(post => {
      // destructure data from post frontmatter
      const { description, title, tags } = post.node.frontmatter
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        tags
          .join("") // convert tags from an array to string
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    })
    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout>
        <Helmet>
            <title>Technical Blog</title>
            <meta name="description" content="Tiffany's Technical Blog" />
        </Helmet>

        <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
                <h1>Technical Blog</h1>
            </header>
            <div className="content">
                <p>Filter Blogs</p>
                <input
                type="text"
                aria-label="Search"
                placeholder="Type to filter posts..."
                onChange={handleInputChange} />
            </div>
        </div>
        </section>

        <div id="main">
          <div className="inner dark">

            {posts.map(({ node }) => {
              const { excerpt } = node
              const { path } = node.frontmatter

              const { title, date, description } = node.frontmatter
              return (
                <article key={path}>
                  <header>
                    <h2>
                      <Link to={path}>{title}</Link>
                    </h2>

                    <p>{date}</p>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: description || excerpt,
                      }}
                    />
                    <ul className="actions">
                        <li><Link to="/blog/static-sites-using-workers" className="button dark">Read more</Link></li>
                    </ul>
                  </section>
                  <hr />
                </article>
              )
            })}
          </div>
        </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            tags
            path
          }
        }
      }
    }
  }
`