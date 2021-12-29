import React from 'react'

const ProjectPreview = props => {
    const {key, title, description, link, image, tags} = props.project
    const projectTags = tags
      .sort()
      .map(tag => <span className="tag small"> {tag} </span>)

    return (
        <a href={link}>
            <div className="project-card">
                <div key={key} className="contents">
                    <h2 id='card-title'>{title}</h2>
                    <div id='card-img' style={{ backgroundImage: `url(${image})` }}/>
                    <span id="card-description">{description}</span>
                    <span id="card-tags">{projectTags}</span>
                </div>
            </div>  
        </a>
    )
}

export default ProjectPreview