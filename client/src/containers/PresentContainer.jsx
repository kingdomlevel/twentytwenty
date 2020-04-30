import React, { useState, useEffect } from "react";
import SlideContainer from "./SlideContainer";
import PresentStatus from "../components/presentations/present/PresentStatus"
import End from "../components/presentations/present/End"; 

const PresentContainer = ({presentation}) => {
    // establish state
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const slideTime = 20000;     // in milliseconds

    // start pres
    useEffect(() => {
        if (currentSlideIndex <= presentation.slides.length-1) {
            setTimeout(() => {
                setCurrentSlideIndex(currentSlideIndex + 1);
            }, slideTime);;
        }
    }, [presentation.slides.length, currentSlideIndex]);
    
    const [currentSlide, setCurrentSlide] = useState(null);
    useEffect(() => {
        setCurrentSlide(presentation.slides[currentSlideIndex]);
    }, [presentation.slides, currentSlideIndex])
    
    if (!currentSlide) return (
        <End/>
    );

    // render
    return (
        <>
            <SlideContainer slide={currentSlide}/>
            <PresentStatus slideCount={presentation.slides.length} currentSlide={currentSlideIndex + 1} slideTime={slideTime}/>
        </>
    )
}

export default PresentContainer;