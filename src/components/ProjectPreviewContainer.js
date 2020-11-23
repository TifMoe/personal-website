import React from 'react'
import ProjectPreview from './ProjectPreview'

import pic01 from '../assets/images/fishbowl-thumbnail.png'
import pic02 from '../assets/images/trending-temps-thumbnail.png'

const ProjectPreviewContainer = (props) => {

    const projectRegister = [
        {
            key: 'fishbowl',
            title: 'Fishbowl',
            description: 'Socially distanced party-game built with Go + React + Cloudflare workers',
            link: 'https://fishbowl.rocks',
            image: pic01,
            tags: ["react", "golang", "kubernetes"],
        }, 
        {
            key: 'temps',
            title: 'Trending Temps',
            description: 'Dashboard of historical temperature data visualizations built when learning d3.js',
            link: 'https://trendingtemps.com',
            image: pic02,
            tags: ["d3.js", "workers", "graphQL", "serverless"],
        },
    ]

    const showProjects = () => {
        let projects = []
        projectRegister.forEach((p) => {
            console.log("foreach")
            console.log(p)
            projects.push(<ProjectPreview project={p}/>)
        })
        return projects
    }

    return (
        <div id={props.id} className='section-container'>
            <div className='section-header'>
                <h1 id='section-title'>Projects</h1>
                <span id='section-description' className='fade'>Personal projects...</span>
            </div>
            <div className='content-grid'>
                {showProjects()}
            </div>
        </div>
    )
}

export default ProjectPreviewContainer