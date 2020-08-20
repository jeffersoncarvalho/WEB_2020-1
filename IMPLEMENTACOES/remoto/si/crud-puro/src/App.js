import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Create from './components/disciplina/Create';
import Edit from './components/disciplina/Edit';
import List from './components/disciplina/List';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to={'/'} className="navbar-brand">CRUD</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li>
              <li className="nav-item">
                <Link to={'/list'} className="nav-link">List</Link>
              </li>
            </ul>
          </div>
        </nav>

        <h2>Projeto CRUD</h2> <br />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/create' component={Create} />
          <Route path='/edit/:id' component={Edit} />
          <Route path='/list' component={List} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
