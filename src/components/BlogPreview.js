import React from 'react'
import { Link } from 'gatsby'

import '../assets/scss/main.scss'

export default function BlogPreview({blog}) {
  const { excerpt } = blog
  const { title, date, description, tags, path } = blog.frontmatter
  const postTags = tags
    .sort()
    .map(tag => <span className="tag small"> {tag} </span>)

  return (
      <Link to={path}>
        <div className="blog-card">
          <div key={path} className="content-grid">

              <div className='card-timeline'>
                <span className="dot"></span>
                <h3>{date}</h3>
              </div>

              <div className="card-content">
                <h2 id='card-title'>{title}</h2>
                <h3 id="card-date">{date}</h3>
                <section id='card-description'>
                    <p
                    dangerouslySetInnerHTML={{
                      __html: description || excerpt,
                    }}
                  />
                </section>
                <div className="tag-container" id='card-tags'> {postTags} </div>
              </div>

          </div>
        </div>
      </Link>
  )
}
