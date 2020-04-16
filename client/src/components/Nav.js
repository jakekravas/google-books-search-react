import React from 'react'
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand">(React) Google Book Search</div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">Search</Link>
          </li>
          <li className="nav-item">
            <Link to={"/saved"} className="nav-link">Saved</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;