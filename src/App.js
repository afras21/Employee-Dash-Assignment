import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignInForm from './pages/SignInForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              </div>


              <Route exact path="/" component={SignInForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
              <Route path='/dashboard' component={Dashboard}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
