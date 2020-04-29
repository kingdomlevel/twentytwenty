import React from "react";
import SlideTitle from "../components/presentations/present/SlideTitle";
import SlideLongText from "../components/presentations/present/SlideLongText";
import "./Slides.css"

const SlideContainer = ({ slide }) => {
    return (
        <>
            <SlideTitle title={slide.title}/>
            <SlideLongText raw={slide.longtext}/>
            {slide.images[0] && (<img alt="temp" src={`http://localhost:1337${slide.images[0].url}`} />)}
        </>
    )
}

export default SlideContainer;