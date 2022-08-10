import React from "react"
import {data} from "../data/ExperienceData"
import useNav from "../hooks/useNav"

export default function Experience() {
    const experienceRef = useNav('experience')

    const experiences = data.map((experience, idx) => {
        return (
            <div key={experience.key} className="experience-block">
                <div className="experience-section_left">
                    <h2 className="experience-name">
                        {experience.name}
                    </h2>
                    <p className="experience-time">
                        {experience.time}
                    </p>
                </div>
                <div className="experience-section_right">
                    <h3 className="experience-description">
                        {experience.description}
                    </h3>
                    <p className="experience-details">
                        {experience.details}
                    </p>
                </div>
            </div>
        )
    })
    return (
        <div className="experience-container" ref={experienceRef} id="experience-container">
            <h1 className="experience-title">My Journey</h1>
            {experiences}
        </div>
    )
}
