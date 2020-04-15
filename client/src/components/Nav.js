import React from 'react'
import {Link} from "react-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand">(React) Google Book Search</div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link">Search</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;