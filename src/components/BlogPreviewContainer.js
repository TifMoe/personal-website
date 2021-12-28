import React from 'react'
import Select from 'react-select'
import BlogPreview from './BlogPreview'

export default function BlogPreviewContainer( {id, blogPosts, filterInput, blogTags}) {
  return (
    <div id={id} class='section-container'>
      <div class='section-header'>
        <h1 id='section-title'>Blog</h1>
        <Select
              id='section-filter'
              isMulti
              isClearable
              onChange={filterInput}
              options={blogTags}
              name="filter"
              placeholder="Filter articles by tags..."
              theme={theme => ({
              ...theme,
                colors: {
                    ...theme.colors,
                    primary25: '#F4F3F6', // highlight for options in list
                    primary: 'grey', // selected option background
                    dangerLight: '#E88C7D', // background x in close
                    danger: 'white', // x in close
                },
              })}
              style={base => ({
                ...base,
                border: 0,
                boxShadow: "none"
              })}
          />  
      </div>

      <div className="inner dark">
          <div className="float">
            {blogPosts.map(({ node }) => {
              const blogs = <BlogPreview blog={node} />
              return blogs
            })}
          </div>
      </div>
    </div>
  )
}
