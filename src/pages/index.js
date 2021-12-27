import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { CSSPlugin, AttrPlugin } from 'gsap/all';

import Layout from '../components/layout'
import Banner from '../components/Banner'
import BlogPreviewContainer from '../components/BlogPreviewContainer'
import ProjectPreviewContainer from '../components/ProjectPreviewContainer'

const plugins = [CSSPlugin, AttrPlugin]

export default function HomeIndex( {data} ) {
  const allPosts = data.allMarkdownRemark.edges || []
  const [displayedPosts, setDisplayedPosts] = useState(allPosts)
  const allTags = unpackTags(allPosts)

  const handleTagSelection = event => {
    if (event) {
      const newQuery = event.map(tag => tag.value)
      const filteredData = allPosts.filter(post => {
        const { tags } = post.node.frontmatter
        return newQuery.every(v => tags.includes(v))
      })
      setDisplayedPosts(filteredData)
    } else {
      // default to display all posts if event is null
      setDisplayedPosts(allPosts)
    }
  }

  return (
    <Layout>
      <Helmet
        title="Tiffany Moeller"
        meta={[
          { name: 'description', content: 'Personal Website' },
          { name: 'keywords', content: 'tech' },
        ]}
      ></Helmet>
      <Banner/>
      <div id="main" className='home'>
          <BlogPreviewContainer 
            id="blogs"
            blogPosts={displayedPosts}
            filterInput={handleTagSelection}
            blogTags={allTags}
          />
          <ProjectPreviewContainer id="projects"/>
      </div>
    </Layout>
  )
}

function unpackTags(allPosts) {
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
  return allTags.sort().map(tag => ({ label: tag, value: tag, id: tag }))
}

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
