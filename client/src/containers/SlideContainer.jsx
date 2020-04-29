import React from "react";

const SlideContainer = ({slide}) => {
    return (
        <>
            <h1>{slide.title}</h1>
            <p>{slide.longtext}</p>
            { slide.images[0] && (<img alt="temp" src={`http://localhost:1337${slide.images[0].url}`} />) }
        </>
    )
}

export default SlideContainer;