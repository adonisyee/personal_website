import React from "react"
import Carousel from "../components/Carousel"
import {data} from "../data/AboutImages"
import useWindowWidth from "../hooks/useWindowWidth"
import useNav from "../hooks/useNav"

export default function About() {
    const windowWidth = useWindowWidth()

    const aboutRef = useNav('about')

    return (
        <div className='about-container' ref={aboutRef} id="about-container">
            <h1 className='about-title'>About Me</h1>
            <h3 className='about-title_description'>Front-End Web Developer</h3>
            <div className='about-info'>
                <div className='about-section left'>
                    <h2 className='about-subtitle'>My Work</h2>
                    <p className='about-subtitle_description'>
                    I am a programmer who has spent the last 4 years as a Data Scientist, working primarily
                    in Python, but over that time I found a passion for front-end web development and have decided to venture
                    into it full-time after working on many projects for fun and sharpening my front-end skills.
                    </p>
                </div>
                <Carousel class="about-carousel" data={data} windowWidth={windowWidth}/>
                <div className='about-section right'>
                    <h2 className='about-subtitle'>My Life</h2>
                    <p className='about-subtitle_description'>
                    Born in San Francisco and raised in the Bay Area by a first-generation American Chinese father and
                    a Russian-Jewish immigrant mother, I love living here in the Bay because of its diversity and meshing
                    of culture, amazing food, and natural beauty. I am a huge foodie, die-hard sports fan (Giants, Warriors, Raiders), amateur weightlifter, car enthusiast,
                    and a competitive Yugioh Duelist.
                    </p>
                </div>
            </div>
        </div>

    )
}
