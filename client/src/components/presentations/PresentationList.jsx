import React, { useContext } from 'react';
import { store } from '../../store.js';
import './PresentationList.css';

const PresentationList = ({ presentations }) => {
    const {dispatch} = useContext(store);
    
    const presClick = (presentation) => {
        // dispatch selected presentation to global
        dispatch({
            type: "SET_PRESENTATION",
            data: {
                presentation: presentation
            }
        });
    }

    const list = presentations.map((presentation, index) => {
        return (
            <li
                className="presentation-in-list"
                key={index} 
                onClick={() => presClick(presentation)}>

                <h3>{presentation.title}</h3>
                {presentation.user.username && <p> by {presentation.user.username}</p>}
                
                <p className="last-updated">last updated: {new Date(presentation.updated_at).toLocaleDateString()}</p>

            </li>
        )
    });

    return (
        <ul id="presentation-list">
            {list}
        </ul>
    )
};

export default PresentationList;