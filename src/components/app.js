import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavigationComponent from './navigation/navigation-container';
import home from './pages/home';
import about from './pages/about';
import contact from './pages/contact';
import blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import noMatch from './pages/no-match';

export default class App extends Component {
  constructor() {
    super();

    this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }
  
  getPortfolioItems() {
    // Make a request for a user with a given ID
    axios.get('https://danzjamz.devcamp.space/portfolio/portfolio_items')
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  render() {
    this.getPortfolioItems();
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
              <Route exact path='/portfolio/:slug' activeClassName='nav-link-active' component={PortfolioDetail} />
              <Route component={noMatch} />
            </Switch>
          </div>
        </Router>

        {/* <PortfolioContainer /> */}
      </div>
    );
  }
}
