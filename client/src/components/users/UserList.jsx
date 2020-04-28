import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./UserList.css";

const UserList = ({users}) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);

    const userClicked = (clickedUser) => {
        // debugger;
        if (clickedUser === selectedUser) {
            setSelectedUser(null);
            setUserDetails(null);
        } else {
            setSelectedUser(clickedUser);
            setUserDetails((
                <section className="user-details">
                    <p>
                        <Link to={`/users/${clickedUser.id}`}>
                            {clickedUser.presentations.length} presentations
                        </Link>
                    </p>
                    <p>user since {new Date(clickedUser.created_at).toLocaleDateString()}</p>
                </section>
            ));
        }
    }

    const listItems = users.map((user, index) => {
        return (
            <li key={index}>
                <p onClick={() => userClicked(user)} className="username">{user.username}</p>
                {user === selectedUser && userDetails}
            </li>
        )
    })

    return (
        <ul className="users-list">
            {listItems}
        </ul>
    )
}

export default UserList;