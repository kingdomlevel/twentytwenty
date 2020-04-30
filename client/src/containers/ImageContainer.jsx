import React from "react";

const ImageContainer = ({images}) => {
    const imageElements = images.map((img, index) => {
        return (
            <img alt="temp" key={index} src={`http://localhost:1337${img.url}`} />
        );
    })
    
    return (
        <div className="slide-images">
            {imageElements}
        </div>
    )
}

export default ImageContainer;