import React from "react"
import {data} from "../data/ProjectData"
import {ImNewTab} from "react-icons/im"
import useNav from "../hooks/useNav"

export default function Projects() {
    const projectsRef = useNav('projects')

    const projects = data.map((project, idx) => {
        return (
            <div className="projects-card" key={project.key}>
                <a href={project.src} target="_blank" rel="noopener noreferrer">
                    <img className="projects-img" src={project.image} alt={project.alt}/>
                    <div className="projects-overlay">
                        <div className="projects-info">
                            <h2 className="projects-card_title">{project.title}</h2>
                            <p className="projects-card_description">{project.description}</p>
                            <h3>Tags:</h3>
                            <p className="projects-card_tags">{project.tags}</p>
                        </div>
                    </div>
                    <ImNewTab className="projects-icon"/>
                </a>
            </div>
        )
    })

    return (
        <div className="projects-container" ref={projectsRef} id="projects-container">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-cards">
                {projects}
            </div>
        </div>
    )

}
