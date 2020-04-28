import React, { useState } from "react"; 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import UserList from "../components/users/UserList";
import UserDetail from "../components/users/UserDetail";

const UsersContainer = () => {

    const [users, setUsers] = useState([]);
    
    useState(() => {
        console.log("fetching users...")
        fetch('http://localhost:1337/users')
        .then(res => res.json())
        .then((data) => {
            setUsers(data);
        });
    });
    
    if (users.length === 0) return "no users";

    const findUserById = (id) => {
        return users.find((user) => {
            return user.id === parseInt(id);
        })
    }

    return (
        <Router>
            <>
                <Header />
                <Navigation />
                <Switch>
                    <Route exact path="/users/:id" render={(props) => {
                        const id = props.match.params.id;
                        const user = findUserById(id);
                        return <UserDetail user={user}/>
                    }}/>

                    <Route render={() => {
                        return <UserList users={users} />
                    }}/>
                    
                </Switch>
            </>
        </Router>
    )

        // < Router >
        // <Fragment>
        //     <Switch>
        //         <Route exact path='/pirates/new' render={() => {
        //             return <PirateCreateForm onFormSubmit={this.handlePost} />
        //         }} />

        //         <Route exact path='/pirates/:id/edit' render={(props) => {
        //             let pirateToEdit = this.findPirateById(props.match.params.id);
        //             return <PirateEditForm pirate={pirateToEdit} handleUpdate={this.handleUpdate} />
        //         }} />

        //         <Route exact path="/pirates/:id" render={(props) => {
        //             const id = props.match.params.id;
        //             const pirate = this.findPirateById(id);
        //             return <PirateDetail pirate={pirate} onDelete={this.handleDelete} />
        //         }} />

        //         <Route render={() => {
        //             return <PirateList pirates={this.state.pirates} />
        //         }} />
        //     </Switch>
        // </Fragment>
        //     </Router >
};

export default UsersContainer;