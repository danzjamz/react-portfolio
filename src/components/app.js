import React, { Component } from 'react';
import moment from 'moment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationComponent from './navigation/navigation-container';
import home from './pages/home';
import about from './pages/about';
import contact from './pages/contact';
import blog from './pages/blog';

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <h1>Danielle Hovley Portfolio</h1>
            <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
            <NavigationComponent />
            <Switch>
              <Route exact path='/' activeClassName='nav-link-active' component={home} />
              <Route path='/about' activeClassName='nav-link-active' component={about} />
              <Route path='/contact' activeClassName='nav-link-active' component={contact} />
              <Route path='/blog' activeClassName='nav-link-active' component={blog} />
            </Switch>
          </div>
        </Router>

        {/* <PortfolioContainer /> */}
      </div>
    );
  }
}
