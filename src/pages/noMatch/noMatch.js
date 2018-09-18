
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class NoMatch extends Component {
render() {
    return (
    <div className="no-match">
      <section className="hero is-light is-fullheight">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                  <Link className="navbar-item" to="/">
                      <img src="https://i.imgur.com/2yDsAC7.png" alt="HB"/>
                  </Link>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" class="navbar-menu">
                <div className="navbar-end">
                  <Link className="navbar-item" to="/">
                    Home
                  </Link>
                  <Link className="navbar-item" to="/about">
                    About
                  </Link>
                  <Link className="navbar-item" to="/resume">
                    Resume
                  </Link>
                  <Link className="navbar-item" to="/projects">
                    Projects
                  </Link>
                  <Link className="navbar-item" to="/contact">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
            <div>
                <img src="https://i.imgur.com/wVIm7l8.jpg" className="error-image" id="error-message" alt="Darnit" />
            </div>
        </div>
      </section>
    </div>
  );
}
}