import React, { useState, useEffect } from "react";
import SlideContainer from "./SlideContainer";
import PresentStatus from "../components/presentations/present/PresentStatus"
import End from "../components/presentations/present/End";

const PresentContainer = ({ presentation }) => {
    // establish state
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [autoTimeout, setAutoTimeout] = useState(null);
    const [paused, setPaused] = useState(false);
    const slideTime = 20000;     // in milliseconds

    function handleKeyPress(event) {
        document.removeEventListener("keydown", handleKeyPress);
        switch (event.code) {
            case ("Space"):
                clearTimeout(autoTimeout);
                setPaused(!paused);
                break;
            case ("ArrowRight"):
                setCurrentSlideIndex(currentSlideIndex + 1);
                setPaused(false);
                clearTimeout(autoTimeout);
                document.removeEventListener("keydown", handleKeyPress);
                break;
            case ("ArrowLeft"):
                setCurrentSlideIndex(currentSlideIndex -1);
                setPaused(false);
                clearTimeout(autoTimeout);
                document.removeEventListener("keydown", handleKeyPress);
                break;
            default:
                break;

        }
    }

    // listen for key input
    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)
    })

    // start pres
    useEffect(() => {
        if (currentSlideIndex <= presentation.slides.length - 1 && !paused) {
            setAutoTimeout(setTimeout(() => {
                setCurrentSlideIndex(currentSlideIndex + 1);
            }, slideTime));
        }
    }, [presentation.slides.length, currentSlideIndex, paused]);

    const [currentSlide, setCurrentSlide] = useState(null);
    useEffect(() => {
        setCurrentSlide(presentation.slides[currentSlideIndex]);
    }, [presentation.slides, currentSlideIndex])

    if (!currentSlide) return (
        <End />
    );

    // render
    return (
        <>
            <SlideContainer slide={currentSlide} />
            <PresentStatus 
                slideCount={presentation.slides.length} 
                currentSlide={currentSlideIndex + 1} 
                slideTime={slideTime} 
                paused={paused}/>
        </>
    )
}

export default PresentContainer;