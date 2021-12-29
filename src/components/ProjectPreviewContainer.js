import React from 'react'
import ProjectPreview from './ProjectPreview'

import pic01 from '../assets/images/fishbowl-thumbnail.png'
import pic02 from '../assets/images/trending-temps-thumbnail.png'
import pic03 from '../assets/images/fox-bingo.png'

const ProjectPreviewContainer = (props) => {

    const projectRegister = [
        {
            key: 'fishbowl',
            title: 'Fishbowl',
            description: 'Socially distanced party-game built with React + Cloudflare Durable Objects backend',
            link: 'https://fishbowl.rocks',
            image: pic01,
            tags: ["react", "cloudflare workers"],
        }, 
        {
            key: 'temps',
            title: 'Trending Temps',
            description: 'Dashboard of historical temperature data visualizations built when learning d3.js. This consumes an Apollo graphQL API I also built and deployed using Cloudflare Workers',
            link: 'https://trendingtemps.com',
            image: pic02,
            tags: ["d3.js", "cloudflare workers", "graphQL"],
        },
        {
            key: 'bingo',
            title: 'Baby Shower Bingo',
            description: 'Lightweight bingo game I developed for my virtual baby shower. Includes a custom SVG animated to respond to mouse movements with GSAP',
            link: 'https://baby.tiffanymoeller.com',
            image: pic03,
            tags: ["svg", "animation", "gsap", "cloudflare workers"],
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
            </div>
            <div className='project-cards-container'>
                {showProjects()}
            </div>
        </div>
    )
}

export default ProjectPreviewContainer