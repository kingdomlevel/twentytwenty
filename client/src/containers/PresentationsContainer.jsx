import React, { useState } from "react";
import PresentationList from '../components/PresentationList';

const PresentationsContainer = () => {
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
            <PresentationList presentations={presentations} />
        </>
    )
};

export default PresentationsContainer;