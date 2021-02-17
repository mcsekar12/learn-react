import React, { Component } from 'react';
import './header.css';

import { Button } from 'antd';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
    };
  }

  logout = () => {
    localStorage.clear();
    this.props.history.push('/');
  };
  render() {
    let showButton = window.location.pathname === '/admin/dashboard';

    return (
      <div className="header__cont">
        <div className="header__title">
          <span className="logo__text">
            <div> File Management</div>
          </span>
          <span>
            <div className="ui secondary  menu">
              <a href="/login" className=" item">
                Login
              </a>
              <a href="/dashboard" className=" item">
                Dashboard
              </a>
              <a href="/wiki" className=" item">
                Wiki Search
              </a>
              <a href="/image" className=" item">
                UnSplash Search
              </a>
              <a href="/video" className=" item">
                Youtube Search
              </a>
              <a href="/accordion" className=" item">
                Accordion
              </a>
            </div>
          </span>
          {showButton ? (
            <Button danger onClick={this.logout}>
              Logout
            </Button>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
