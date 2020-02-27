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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN'
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin =  this.handleUnsuccessfulLogin.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({ loggedInStatus: "LOGGED_IN" })
  }

  handleUnsuccessfulLogin() {
    this.setState({ loggedInStatus: "NOT_LOGGED_IN" })
  }
  
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationComponent />

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
