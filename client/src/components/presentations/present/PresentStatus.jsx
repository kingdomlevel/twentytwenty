import React, { useState, useEffect, useRef } from "react";
import "./PresentStatus.css";

const PresentStatus = ({ slideCount, currentSlide, slideTime, paused }) => {
    const [time, setTime] = useState(slideTime / 1000);

    // this function from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    useEffect((() => {
        setTime(slideTime / 1000);
    }), [currentSlide, slideTime]);

    // useEffect(() => {

    // }, [paused])

    useInterval(() => {
        if (!paused) {
            if (time > 1) {
                setTime(time - 1);
            } else {
                setTime(slideTime / 1000);
            }
        }
    }, 1000);

    return (
        <div className="present-status">
            <p>{currentSlide} / {slideCount}</p>
            <p>{paused ? "⏸" : time}</p>
        </div>
    )
}

export default PresentStatus;