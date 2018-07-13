import React, { Component } from 'react';
import { Navbar, NavItem, PageHeader } from 'emerald-ui';

import CourseHistory from '../CourseHistory';
import cebLogo from './ce-broker-logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <img src={cebLogo} alt="CEBroker" />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <PageHeader>
          <h1>Good afternoon, Jane!</h1>
          <PageHeader.Nav activeKey={1}>
            <NavItem eventKey={1}>COURSE HISTORY</NavItem>
          </PageHeader.Nav>
        </PageHeader>
        <div className="container content">
          <CourseHistory />
        </div>
      </div>
    );
  }
}

export default App;
