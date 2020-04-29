import React, { useState, useEffect } from "react";
import PresentStatus from "../components/presentations/present/PresentStatus"

const PresentContainer = ({presentation}) => {
    // establish state
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const slideTime = 5000;     // in milliseconds

    // start pres
    useEffect(() => {
        if (currentSlideIndex < presentation.slides.length-1) {
            setInterval(() => {
                setCurrentSlideIndex(currentSlideIndex + 1);
            }, slideTime)
        }
    });

    const [currentSlide, setCurrentSlide] = useState(null);
    useEffect(() => {
        setCurrentSlide(presentation.slides[currentSlideIndex]);
    }, [presentation.slides, currentSlideIndex])
    
    if (!currentSlide) return "loading...";

    // render
    return (
        <>
            <h1>{currentSlide.title}</h1>
            <p>{currentSlide.longtext}</p>
            {currentSlide.images[0] && (<img alt="temp" src={`http://localhost:1337${currentSlide.images[0].url}`}/>)}
            <PresentStatus slideCount={presentation.slides.length} currentSlide={currentSlideIndex + 1} slideTime={slideTime}/>
        </>
    )
}

export default PresentContainer;