import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavigationComponent from './navigation/navigation-container';
import home from './pages/home';
import about from './pages/about';
import contact from './pages/contact';
import blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import noMatch from './pages/no-match';
import Auth from './pages/auth';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN'
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin =  this.handleUnsuccessfulLogin.bind(this);
    
    this.checkLoginStatus() 
  }

  handleSuccessfulLogin() {
    this.setState({ loggedInStatus: "LOGGED_IN" })
  }

  handleUnsuccessfulLogin() {
    this.setState({ loggedInStatus: "NOT_LOGGED_IN" })
  }

  checkLoginStatus() {
    return axios.get('https://api.devcamp.space/logged_in', { withCredentials: true })
      .then(response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        if (loggedIn && loggedInStatus === 'LOGGED_IN') {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === 'NOT_LOGGED_IN') {
          this.setState({
            loggedInStatus: 'LOGGED_IN'
          });
        } else if (!loggedIn && loggedInStatus === 'LOGGED_IN') {
          this.setState({
            loggedInStatus: 'NOT_LOGGED_IN'
          });
        }
      }).catch(error => {
        console.log('Error', error);
      })
  }

  authorizePages() {
    return [
      <Route path='/blog' component={blog} />
    ]
  }
  
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationComponent loggedInStatus={ this.state.loggedInStatus } />

            <h2>{ this.state.loggedInStatus }</h2>

            <Switch>
              <Route exact path='/' component={home} />

              <Route path='/auth' 
                render={ props => (
                  <Auth 
                    { ...props }
                    handleSuccessfulLogin={ this.handleSuccessfulLogin }
                    handleUnsuccessfulLogin={ this.handleUnsuccessfulLogin }
                  />
                )} 
              />

              <Route path='/about' component={about} />
              <Route path='/contact' component={contact} />
              { this.state.loggedInStatus === 'LOGGED_IN' ? this.authorizePages() : null }
              <Route exact path='/portfolio/:slug' component={PortfolioDetail} />
              <Route component={noMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
