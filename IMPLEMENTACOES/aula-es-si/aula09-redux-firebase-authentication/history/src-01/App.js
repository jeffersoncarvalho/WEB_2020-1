import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import Main from './components/Main'
import Signin from './login/Signin'
import Signup from './login/Signup'
import Content from './components/Content'

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to={'/'} className='navbar-brand'>Firebase Auth</Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li>
                  <Link to={'/'} className='nav-link'>Home</Link>
                </li>
                <li>
                  <Link to={'/signin'} className='nav-link'>Sign-In</Link>
                </li>
                <li>
                  <Link to={'/signup'} className='nav-link'>Sign-Up</Link>
                </li>
                <li>
                  <Link to={'/content'} className='nav-link'>Content</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route path='/content' component={Content} />
          </Switch>
        </div>
      </Router>
    )
  }
}