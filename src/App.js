import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/routes/Home'
import Advertising from './components/routes/Advertising'
import Contact from './components/routes/Contact'
import Influencer from './components/routes/Influencer'
import NotFound from './components/routes/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

const routes = [
  { path: '/', name: 'Home', Component: Home, classNames: 'Home narrow_page with_h1_margin' },
  { path: '/advertising', name: 'Advertising', Component: Advertising, classNames: 'Advertising columns_2' },
  { path: '/influencer', name: 'Are you an influencer?', Component: Influencer, classNames: 'Influencer narrow_page with_h1_margin' },
]

function App() {
  return (
    <>
      <Router>
        <div>
          <Header routes={routes} />

          <div className="container">
              {routes.map(({ path, name, Component, classNames }) => (
                <>
                  <Route key={path} exact path={path}>
                    {({ match }) => (
                      <CSSTransition
                        in={match != null}
                        timeout={300}
                        classNames="page"
                        unmountOnExit
                      >
                        <div className={`page ` + classNames}>
                          <Component />
                        </div>
                      </CSSTransition>
                    )}
                  </Route>
                </>
              ))}

              
          </div>
        </div>
      </Router>
      
    </>
  );
}

export default App;
