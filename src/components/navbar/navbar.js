import React, { Component } from 'react';
import { Link } from "react-router-dom";


let SidebarMenu = props => {
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
class Navbar extends Component {
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
      )
    }
}