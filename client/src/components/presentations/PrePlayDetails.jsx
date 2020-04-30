import React, { useContext } from "react";
import { store } from '../../store';
import './PrePlayDetails.css';

const PrePlayDetails = () => {
    const { state, dispatch } = useContext(store);
    
    if (!state.selectedPresentation) return null;
    
    const pres = state.selectedPresentation;

    const closePop = () => {
        // clear selectedPresentation in global state
        dispatch({
            type: "SET_PRESENTATION",
            data: {
                presentation: null
            }
        });
    }

    return (
        <div className="pre-play-details">
            <h2>{pres.title}</h2>
            {pres.user.username && (<h3>
                a presentation by <a className="user-name" href={`/users/${pres.user.id}`}>{pres.user.username}</a>
            </h3>)}
            <p> {pres.slides.length} slides 
                ({pres.slides.length * 20} seconds)</p>
            <p>created: 
                {new Date(pres.created_at).toLocaleString()}
            </p>
            <p className="last-updated">last updated: 
                {new Date(pres.updated_at).toLocaleString()}
            </p>

            <p className="start">
                <a href={`/present/${pres.id}`}>
                    <span>b</span>egin <span>p</span>resenting
                </a>
            </p>
            
            <p className="close-link" onClick={closePop}>x</p>
        </div>
    )
}

export default PrePlayDetails;