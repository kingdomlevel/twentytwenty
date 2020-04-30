import React from "react";
import SlideTitle from "../components/presentations/present/SlideTitle";
import SlideLongText from "../components/presentations/present/SlideLongText";
import ImageContainer from "./ImageContainer";
import "./Slides.css"

const SlideContainer = ({ slide }) => {
    return (
        <>
            <SlideTitle title={slide.title}/>
            <div id="slide-main">
                <ImageContainer images={slide.images}/>
                <SlideLongText raw={slide.longtext}/>
            </div>
        </>
    )
}

export default SlideContainer;