import React from "react"
import useNav from "../hooks/useNav"

export default function Landing() {
    const landingRef = useNav('')

    return (
        <div className="landing-container" ref={landingRef} id="landing-container">
            <h1 className="landing-title">Adonis Yee</h1>
            <p className="landing-description">Interactive Resume</p>
        </div>
    )
}
