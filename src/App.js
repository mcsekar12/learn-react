import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './header/header.js';

import Dashboard from './dashboard/dashboard';
import Login from './login/login';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="hero">
          <div className="main__cont">
            <Header
              changeDate={(date) => {
                this.changeDate(date);
              }}
              changeRegion={(region) => {
                this.changeRegion(region);
              }}
            ></Header>
          </div>

          <div>
            <Switch>
              <Route path="/dashboard" render={() => <Dashboard />} />
              <Route path="/login" render={() => <Login />} />
              <Route path="/" render={() => <Login />} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
