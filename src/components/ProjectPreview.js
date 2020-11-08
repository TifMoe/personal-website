import React from 'react'

const ProjectPreview = props => {
    const {key, title, description, link, image} = props.project

    return (
        <a href={link}>
            <div className="project-card">
                <div key={key} className="contents">
                    <div id='card-img' style={{ backgroundImage: `url(${image})` }}/>
                    <h2 id='card-title'>{title}</h2>
                    <span id='card-description'>{description}</span>
                </div>
            </div>  
        </a>
    )
}

export default ProjectPreview