import React from "react";

const ImageContainer = ({images}) => {
    const imageElements = images.map((img, index) => {
        return (
            <li key={index} >
                <img alt="temp" src={`http://localhost:1337${img.url}`} />
            </li>
        );
    })
    
    return (
        <ul className="slide-images">
            {imageElements}
        </ul>
    )
}

export default ImageContainer;