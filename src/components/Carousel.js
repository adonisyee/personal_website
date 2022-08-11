import React, {useState} from "react"
import {TiChevronLeftOutline, TiChevronRightOutline} from "react-icons/ti"
import {BsFillCircleFill} from "react-icons/bs"
import {useSwipeable} from "react-swipeable"

export default function Carousel(props) {
    const [currentPhoto, setCurrentPhoto] = useState(0)
    const length = props.data.length

    const nextImg = () => {
        setCurrentPhoto(prevPhoto => prevPhoto === length - 1 ? 0 : prevPhoto + 1)
    }

    const prevImg = () => {
        setCurrentPhoto(prevPhoto => prevPhoto === 0 ? length - 1 : prevPhoto - 1)
    }

    const setImg = (idx) => {
        setCurrentPhoto(idx)
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => nextImg(),
        onSwipedRight: () => prevImg(),
        trackMouse: true
    })

    if (!props.data || length <= 0) {
        return null
    }

    const slides = props.data.map((img, idx) => {
        return (
            <div className='carousel-slide'  key={img.key}>
                <img className="carousel-img" src={img.image} alt={img.description} draggable="false"/>
            </div>
        )
    })

    return (
        <div className={props.class}>
            <div className="carousel">
                {props.windowWidth && props.windowWidth > 500 && <TiChevronLeftOutline className="carousel-left_arrow" onClick={prevImg}/>}
                {props.windowWidth && props.windowWidth > 500 && <TiChevronRightOutline className="carousel-right_arrow" onClick={nextImg}/>}
                <div className="carousel-slides" {...handlers} style={{transform: `translateX(${-currentPhoto*100}%)`}}>
                    {slides}
                </div>
            </div>
            <div className="carousel-select">
                {
                    props.data.map((img, idx) => {
                        return (
                            <BsFillCircleFill  className={idx === currentPhoto ? 'carousel-button active' : 'carousel-button' } onClick={() => setImg(idx)} key={idx}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
