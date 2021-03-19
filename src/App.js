import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './header/header.js';
import ImageSearch from './image-search/image-search.js';

import Dashboard from './dashboard/dashboard';
import Login from './login/login';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import YoutubeSearch from './youtube-search/youtube-search';
import Widgets from './widgets/widgets';
import WikiSearch from './widgets/wiki-search/wiki-search';
import SongList from './songs/songList';
import Posts from './posts/posts';
import Recursive from './recursive/recursive';
import Application from './components/Application';
import CounterContainer from './counter/counterContainer';
import PizzaContainerHOC from './pizza-calculator/pizza-calculator';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});
class App extends React.Component {
  render() {
    return (
      <div data-test="component-app">
        <Router basename={'/admin'}>
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

            <div className="body__cont">
              <Switch>
                <Route path="/pizza" render={() => <PizzaContainerHOC />} />
                <Route path="/counter" render={() => <CounterContainer />} />
                <Route path="/jet" render={() => <Application />} />
                <Route path="/dashboard" render={() => <Dashboard />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="/image" render={() => <ImageSearch />} />
                <Route path="/video" render={() => <YoutubeSearch />} />
                <Route path="/accordion" render={() => <Widgets />} />
                <Route path="/wiki" render={() => <WikiSearch />} />
                <Route path="/posts" render={() => <Posts />} />
                <Route path="/recursive" render={() => <Recursive />} />
                <Route
                  path="/songs"
                  render={() => {
                    return (
                      <div className="ui container grid">
                        <div className="ui row">
                          <div className="column six wide">
                            <SongList />
                          </div>
                        </div>
                      </div>
                    );
                  }}
                />
                <Route path="/" render={() => <Login />} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
