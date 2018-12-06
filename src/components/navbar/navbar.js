import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { SidebarMenu } from "./sidebarMenu"


export class Navbar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          burgerActive: false
        };
      }
      toggleState = () => {
        const currentState = this.state.burgerActive;
        this.setState({ burgerActive: !currentState });
      };
    render() {
          const burgerActive = this.state.burgerActive;
          let menu;
          if (burgerActive) {
            let hamburger = document.getElementById("side-bar-hamburger")
            hamburger.style.display = "block"
            menu = <SidebarMenu
              toggleState={this.toggleState} />;
          }
          else {
            menu = "";
          }  
      return (
        <div>
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <img src="https://i.imgur.com/2yDsAC7.png" alt="HB"/>
                    </Link>
                    <div class="navbar-burger" onClick={this.toggleState}>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
                <div id="navMenu" class="navbar-menu">
                  <div className="navbar-start" />
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
            <div id="side-bar-hamburger">
            {menu}
          </div>
        </div>
      )
    }
}