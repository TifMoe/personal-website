import React from 'react'
import Select from 'react-select'
import BlogPreview from './BlogPreview'


const BlogPreviewContainer = props => {
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
        <div id='blogs' class='section-container'>
            <div class='section-header'>
              <h1 id='section-title'>Blog</h1>
              <Select
                    id='section-description'
                    isMulti
                    isClearable
                    onChange={props.filterInput}
                    styles={customStyles}
                    options={props.blogTags}
                    name="filter"
                    placeholder="Filter blog articles by tags..."
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
                  {props.blogPosts.map(({ node }) => {
                    const blogs = <BlogPreview blog={node} />
                    return blogs
                  })}
                </div>
            </div>
        </div>
    )
}

export default BlogPreviewContainer

