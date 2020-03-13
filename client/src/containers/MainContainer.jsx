import React, { useState, useEffect } from "react";
import PresentationList from '../components/PresentationList';

const MainContainer = () => {
    const [presentations, setPresentations] = useState([]);
    const [presentation, setPresentation] = useState(null);

    useState(() => {
        fetch('http://localhost:1337/presentations')
            .then(res => res.json())
            .then((data) => {
                setPresentations(data);
            });
    });

    return (
        <>
            <p> simple presentation viewer <span role="img" className="big-emoji" aria-label="wind chime emoji">🌱</span> </p>
            <PresentationList presentations={presentations}/>
        </>
    )
};

export default MainContainer;