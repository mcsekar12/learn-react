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
