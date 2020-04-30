import React, { useState, useEffect } from "react";
import PresentationList from '../components/presentations/PresentationList';
import PrePlayDetails from '../components/presentations/PrePlayDetails';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PresentContainer from "./PresentContainer";

const PresentationsContainer = () => {
    const [presentations, setPresentations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1337/presentations')
            .then(res => res.json())
            .then((data) => {
                setPresentations(data);
            });
    }, []);

    if (presentations.length === 0) return "no users";

    const findPresentationById = (id) => {
        return presentations.find((presentation) => {
            return presentation.id === parseInt(id);
        })
    }

    return (
        <Router>
        <>
            <Switch>
                <Route exact path="/present/:id" render={(props) => {
                    const id = props.match.params.id;
                    const presentation = findPresentationById(id);
                    return <PresentContainer presentation={presentation}/>
                }}/>

                <Route path="/">
                    <Header />
                    <Navigation />
                    <PresentationList presentations={presentations} />
                    <PrePlayDetails/>
                </Route>
            </Switch>
        </>
        </Router>
    )
};

export default PresentationsContainer;