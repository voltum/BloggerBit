import React from 'react'
import logo from '../logo5.png';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function Header(props) {
    const { routes } = props;
    
    return (
        <>
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
                <label htmlFor="collapse" className="collapse_label">
                    <img src={logo} alt="logo" />
                </label>
                <input type="checkbox" id="collapse"
                /> 
            <ul className="topbar_collapse">
                {routes.map(route => (
                    <li key={route.path} ><NavLink
                    key={route.path}
                    to={route.path}
                    activeClassName="active"
                    exact
                    >
                    {route.name}
                    </NavLink></li>
                ))}
            </ul>
        </>
    )
}

export default Header
