import React, { Component } from 'react';
import {BrandStatement} from "../../components/brandStatement/brandStatement";
import { Intro } from "../../components/intro/intro";
import { Link } from "react-router-dom";

export class Home extends Component {
    render() {
      return (
    <div className="Home">
        <section class="hero is-light is-fullheight">
          <div class="hero-head">
            <nav class="navbar">
              <div class="container">
                <div class="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <img src="https://i.imgur.com/2yDsAC7.png" alt="HB"/>
                    </Link>
                  <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenuHeroA" class="navbar-menu">
                  <div class="navbar-end">
                    <Link className="navbar-item is-active" to="/">
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
          <Intro/>
        </section>
        <BrandStatement/>
      </div>
    );
}
}