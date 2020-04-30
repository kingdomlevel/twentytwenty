import React from "react";
import Navigation from "../../Navigation";

const End = () => {
    return (
        <div className="end">
            <div className="end-nav">
                <Navigation/>
            </div>
            <h2>
                <span role="img" className="big-emoji" aria-label="plant seedling emoji">🌱</span>
            </h2>
            <h1>end</h1>
        </div>
    )
}

export default End;