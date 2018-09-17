import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class About extends Component {
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
                    <Link className="navbar-item is-active" to="/about">
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
            <div className="container has-text-centered">
              <figure className="image is-128x128 is-horizontal-center">
                <img src="https://i.imgur.com/cPPhCUv.jpg" alt="Haley" id="self-portrait" className=" is-rounded" />
              </figure>
              <h2 className="subtitle">
                Hello! My name is Haley Belden and I've spent most of my life obsessed with languages. While I spent years working as a translator in the United States and Argentina, I've now began working with another category: programming languages.

                I spent a long time searching for a way to combine my love for creating new things and my love for languages and learning, which I have found in the technological world.


                It also helps that I run into fellow nerds that make terrible jokes far more often than in any other community I've encountered!
              </h2>
            </div>
          </div>
        </section>
        {/* <ContactForm/> */}
      </div>
    );
}
}