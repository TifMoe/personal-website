import React from 'react'
import { Link } from "gatsby"

import '../assets/scss/main.scss'
    
class BlogPreview extends React.Component {
    render() {

        const blog = this.props.blog
        const { excerpt } = blog
        const { title, date, description, tags, path } = blog.frontmatter
        const postTags = tags.sort().map((tag) =>
            <span className="tag small"> {tag} </span>
        );

        return (
            <Link to={path}>
                <div className="blog-card">
                    <div key={path} className="contents">
                        <header>
                        <h2>{title}</h2>
                        <p>{date}</p>
                        </header>

                        <section>
                        <p
                            dangerouslySetInnerHTML={{
                            __html: description || excerpt,
                            }}
                        />

                        </section>
                        <div className="tag-container"> {postTags} </div>
                    </div>
                </div>
                </Link>
        )
    }
}

export default BlogPreview
