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
              <h2 id='card-title'>{title}</h2>
              <span id='card-date'>{date}</span>

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
      </Link>
  )
}
