import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavigationComponent from './navigation/navigation-container';
import home from './pages/home';
import about from './pages/about';
import contact from './pages/contact';
import blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import noMatch from './pages/no-match';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationComponent />

            <Switch>
              <Route exact path='/' component={home} />
              <Route path='/about' component={about} />
              <Route path='/contact' component={contact} />
              <Route path='/blog' component={blog} />
              <Route exact path='/portfolio/:slug' component={PortfolioDetail} />
              <Route component={noMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
