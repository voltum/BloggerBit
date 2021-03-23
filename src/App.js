import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/routes/Home'
import Advertising from './components/routes/Advertising'
import Contact from './components/routes/Contact'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

const routes = [
  { path: '/', name: 'Home', Component: Home, classNames: '' },
  { path: '/advertising', name: 'Advertising', Component: Advertising, classNames: 'columns_2' },
  { path: '/contact', name: 'Contact', Component: Contact, classNames: 'columns_2' },
]

function App() {
  return (
    <Router>
      <div>
        <div className="header container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <nav>
              {routes.map(route => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  activeClassName="active"
                  exact
                >
                  {route.name}
                </NavLink>
              ))}
          </nav>
        </div>

        <div className="container">
            {routes.map(({ path, name, Component, classNames }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className={name + ` page ` + classNames}>
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
