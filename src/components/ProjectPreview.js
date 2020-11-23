import React from 'react'

const ProjectPreview = props => {
    const {key, title, description, link, image, tags} = props.project
    const projectTags = tags
      .sort()
      .map(tag => <span className="tag smallest" style={{backgroundColor: "white"}}> {tag} </span>)

    return (
        <a href={link}>
            <div className="project-card">
                <div key={key} className="contents">
                    <h2 id='card-title'>{title}</h2>
                    <div id='card-img' style={{ backgroundImage: `url(${image})` }}/>
                </div>
                <div className="overlay">
                    <h2 id='overlay-title'>{title}</h2>
                    <p>{description}</p>
                    <span id="overlay-tags">{projectTags}</span>
                </div>
            </div>  
        </a>
    )
}

export default ProjectPreview