import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { NavLink } from 'react-router-dom'
import Logo from "./Images/Project logo black color.jpg"

const Login = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
             <NavLink className="navbar-brand" to="/#"></NavLink>
             <img  className="logo" src={Logo} alt="Logo" />
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink  activeClassName="menu_active" className="nav-link"  to="/Home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeClassName="menu_active"className="nav-link" to="/About">AboutMe</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeClassName="menu_active"className="nav-link" to="/Login">Login</NavLink>
        </li>
        <li className="nav-item">
        <NavLink  activeClassName="menu_active" className="nav-link" to="/Register">Register</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Login
