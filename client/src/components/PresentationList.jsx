import React from 'react';
import './PresentationList.css';

const PresentationList = ({ presentations }) => {
    const list = presentations.map((presentation, index) => {
        return (
            <li
                className="presentation-in-list"
                key={index} >

                <h3>{presentation.title}</h3>
                <p> by <a className="user-name" href="/">{presentation.user.username}</a>
                </p>
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