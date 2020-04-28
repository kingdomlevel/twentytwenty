import React from "react";
import PresentationList from "../presentations/PresentationList";
import PrePlayDetails from "../presentations/PrePlayDetails";

const UserDetail = ({user}) => {
    return (
        <>
            <h2>{user.username}</h2>
            <p>{user.presentations.length} presentations</p>
            <p>user since {new Date(user.created_at).toLocaleDateString()}</p>
            <PresentationList presentations={user.presentations}/>
            <PrePlayDetails/>
        </>
    )
}

export default UserDetail;