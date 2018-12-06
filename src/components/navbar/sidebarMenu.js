import React from 'react';
import { Link } from "react-router-dom";

export let SidebarMenu = props => {
    return (
      <aside className="menu">
        <p className="menu-label" />
        <ul className="menu-list">
          <li>
            <Link className="navbar-item" to="/" onClick={props.toggleState}>
                Home
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/about" onClick={props.toggleState}>
                About
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/resume" onClick={props.toggleState}>
                Resume
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/projects" onClick={props.toggleState}>
                Projects
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact" onClick={props.toggleState}>
                Contact
            </Link>
          </li>
        </ul>
      </aside>
    );
  };