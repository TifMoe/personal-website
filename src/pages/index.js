import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Banner from '../components/Banner'
import BlogPreviewContainer from '../components/BlogPreviewContainer'
import ProjectPreviewContainer from '../components/ProjectPreviewContainer'

const HomeIndex = props => {
  const { data } = props
  const allPosts = data.allMarkdownRemark.edges
  let allTags = []
  allPosts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!allTags.includes(tag)) {
          allTags.push(tag)
        }
      })
    }
  })
  allTags = allTags.sort().map(tag => ({ label: tag, value: tag, id: tag }))

  const emptyQuery = ''
  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const { data } = props
    const posts = data.allMarkdownRemark.edges || []

    if (event) {
      const query = event.map(tag => tag.value)
      // return all filtered posts
      const filteredData = posts.filter(post => {
        // destructure data from post frontmatter
        const { tags } = post.node.frontmatter
        return query.every(v => tags.includes(v))
      })
      // update state according to the latest query and results
      setState({
        query,
        filteredData,
      })
    } else {
      // default to empty query if event is null
      const query = ''
      setState({
        query,
        filteredData,
      })
    }
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

    return (
      <Layout>
        <Helmet
          title="Tiffany Moeller"
          meta={[
            { name: 'description', content: 'Personal Website' },
            { name: 'keywords', content: 'tech' },
          ]}
        ></Helmet>
        <Banner />
        
        <div id="main" className='home'>
          <BlogPreviewContainer 
            blogPosts={posts}
            filterInput={handleInputChange}
            blogTags={allTags}
          />

          <ProjectPreviewContainer />
        </div>
      </Layout>
    )
}

export default HomeIndex

export const blogPageQuery = graphql`
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
