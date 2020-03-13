import React from 'react';
import PresentationsContainer from './containers/PresentationsContainer';
import UsersContainer from './containers/UsersContainer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
  // ,useRouteMatch,
  // useParams
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <Router>
        

        <Switch>
          <Route path="/about">
            <Header />
            <Navigation />
            <About/>
          </Route>
          <Route path="/users">
            <Header />
            <Navigation />
            <UsersContainer/>
          </Route>
          <Route path="/">
            <Header />
            <Navigation/>
            <PresentationsContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
