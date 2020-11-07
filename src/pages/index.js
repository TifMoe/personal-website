import React from 'react'
import Select from 'react-select'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import BlogPreview from '../components/BlogPreview'

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

    const customStyles = {
      container: base => ({
        ...base,
        width: '70%',
      }),
      option: provided => ({
        ...provided,
        borderBottom: '1px dotted darkgrey',
        color: 'grey',
      }),
      control: base => ({
        ...base,
        width: '100%',
        height: 56,
        display: 'block',
        border: 'none',
      }),
      dropdownIndicator: base => ({
        ...base,
        display: 'none',
      }),
      indicatorSeparator: base => ({
        ...base,
        display: 'none',
      }),
      clearIndicator: base => ({
        ...base,
        display: 'none',
      }),
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
        <Banner />
        <Select
          id='blog-filter'
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
              primary25: '#F4F3F6', // highlight for options in list
              primary50: 'white',
              primary: 'grey', // selected option background
              dangerLight: '#E88C7D', // background x in close
              danger: 'white', // x in close
            },
          })}
        />  
        
        <div id="main" className='home'>
              <div className="inner dark">
                <div className="float">
                  {posts.map(({ node }) => {
                    console.log(node)
                    const blogs = <BlogPreview blog={node} />
                    return blogs
                  })}
                </div>
            </div>
        </div>
      </Layout>
    )
}

export default HomeIndex

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
