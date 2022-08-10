import React from "react"
import {data as skill_data} from "../data/SkillsData"
import {data as language_data} from "../data/LanguagesData"
import {data as tool_data} from "../data/ToolsData"
import {AiFillStar} from "react-icons/ai"
import useNav from "../hooks/useNav"

export default function Skills() {
    const skillsRef = useNav('skills')

    const skills = skill_data.map((skill, idx) => {
        return (
            <div key={skill.key} className="skills-item">
                <p className="skills-name">
                    {skill.name}
                </p>
                <div className="skills-stars">
                    {
                        [...Array(5)].map((e, i) => <AiFillStar key={i} className={i < skill.stars ? "skills-star" : "skills-star empty"} />)
                    }
                </div>
            </div>
        )
    })

    const languages = language_data.map((language, idx) => {
        return (
            <div key={language.key} className="skills-item">
                <p className="skills-name">
                    {language.name}
                </p>
                <div className="skills-stars">
                    {
                        [...Array(5)].map((e, i) => <AiFillStar key={i} className={i < language.stars ? "skills-star" : "skills-star empty"} />)
                    }
                </div>
            </div>
        )
    })

    const tools = tool_data.map((tool, idx) => {
        return (
            <div key={tool.key} className="skills-item">
                <p className="skills-name">
                    {tool.name}
                </p>
                <div className="skills-stars">
                    {
                        [...Array(5)].map((e, i) => <AiFillStar key={i} className={i < tool.stars ? "skills-star" : "skills-star empty"} />)
                    }
                </div>
            </div>
        )
    })

    return (
        <div className="skills-container" ref={skillsRef} id="skills-container">
            <h1 className="skills-title">Skills</h1>
            <div className="skills-items">
                {skills}
            </div>
            <h1 className="skills-title">Languages</h1>
            <div className="skills-items">
                {languages}
            </div>
            <h1 className="skills-title">Tools</h1>
            <div className="skills-items">
                {tools}
            </div>
        </div>
    )
}
