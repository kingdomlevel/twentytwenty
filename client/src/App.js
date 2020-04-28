import React from 'react';
import PresentationsContainer from './containers/PresentationsContainer';
import UsersContainer from './containers/UsersContainer';
import About from './components/About';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <Router>
        <>

          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/users" component={UsersContainer}/>
            <Route path="/" component={PresentationsContainer}/>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
