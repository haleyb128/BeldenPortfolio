import React, { Component } from 'react';
import { ContactForm } from "../../components/contactForm/contactForm";
import { ContactInfo } from "../../components/contactInfo/contactInfo";
import { Link } from "react-router-dom";

export class Contact extends Component {
    render() {
      return (
      <div className="Contact">
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
                    <Link className="navbar-item is-active" to="/contact">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <ContactInfo/>
        </section>
        <ContactForm/>
      </div>
    );
}
}