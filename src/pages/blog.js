import React from "react"
import Select from "react-select"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import BlogPreview from "../components/BlogPreview"

const BlogIndex = props => {
  const { data } = props
  const allPosts = data.allMarkdownRemark.edges
  let allTags = []
  allPosts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach( tag => {
        if (!allTags.includes(tag)) {
          allTags.push(tag);
        }
      })
    }
  })
  allTags = allTags.sort()
    .map(tag => ({ label: tag, value: tag, id: tag }));

  const emptyQuery = ""
  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const { data } = props
    const posts = data.allMarkdownRemark.edges || []

    if (event) {
      const query = event.map(tag => tag.value);
          // return all filtered posts
      const filteredData = posts.filter(post => {
        // destructure data from post frontmatter
        const { tags } = post.node.frontmatter
        return (
          query.every(v => tags.includes(v))
        )
      })
      // update state according to the latest query and results
      setState({
        query,
        filteredData,
      })

    } else {
      // default to empty query if event is null
      const query = ""
      setState({
        query,
        filteredData,
      })
    }
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  const customStyles = {
    container: base => ({
      ...base,
      width: "70%",
    }),
    option: (provided) => ({
      ...provided,
      borderBottom: '1px dotted darkgrey',
      color: 'grey',
    }),
    control: base => ({
      ...base,
      width: "100%",
      height: 56,
      display: 'block',
      border: 'none',
    }),
    dropdownIndicator: base => ({
      ...base,
      display: "none"
    }),
    indicatorSeparator: base => ({
      ...base,
      display: "none"
    }),
    clearIndicator: base => ({
      ...base,
      display: "none"
    })
  }

  return (
    <Layout>
        <Helmet>
            <title>Technical Blog</title>
            <meta name="description" content="Tiffany's Technical Blog" />
        </Helmet>

        <section id="banner" className="style4">
        <div className="inner">
            <header className="major">
                <h1>Technical Blog</h1>
            </header>
            <div className="content">
              <Select
                  isMulti
                  isClearable
                  onChange={handleInputChange}
                  styles={customStyles}
                  options={allTags}
                  name="filter"
                  placeholder="Filter blog articles by tags..."
                  theme={theme => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: '#c3e6e3',
                      primary50: '#84b5b1',
                      primary: "grey",
                      dangerLight: "#c3e6e3",
                      danger: "#84b5b1",
                    },
                  })}
                />
            </div>
        </div>
        </section>

        <div id="main">
          <div className="inner dark">
            <div className="float">
              {posts.map(({ node }) => {
                console.log(node);
                const blogs = <BlogPreview blog={ node } />;
                return (
                  blogs
                )
              })}
            </div>
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
            date(formatString: "MMM DD, YYYY")
            tags
            path
          }
        }
      }
    }
  }
`