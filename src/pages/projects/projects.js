import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Projects extends Component {
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
                                        <Link className="navbar-item" to="/">
                                        Home
                                        </Link>
                                        <Link className="navbar-item" to="/about">
                                        About
                                        </Link>
                                        <Link className="navbar-item" to="/resume">
                                        Resume
                                        </Link>
                                        <Link className="navbar-item is-active" to="/projects">
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
                    <div className="tile is-ancestor">
                        <div className="tile is-6 is-vertical is-parent">
                            <div className="tile is-child box">
                                <div className="card-image">
                                    <figure className="image is-16by9">
                                        <img src="https://i.imgur.com/F2AnjMK.jpg" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">ArtSposé</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        A local online marketplace where artists display their 
                                        art by medium and patrons view art.
                                        <br/>
                                        <a target="blank" className="contact-item" href="https://artspose.herokuapp.com/">
                                            <span className="icon is-large">
                                                <i className="fas fa-globe-americas fa-3x" />
                                            </span>
                                        </a> 
                                        <a target="blank" className="contact-item" href="https://github.com/HRFoxhill/project3">
                                            <span className="icon is-large">
                                                <i className="fab fa-github-square fa-3x" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="tile is-child box">
                                <div class="card-image">
                                    <figure class="image is-16by9">
                                        <img src="https://i.imgur.com/11NCttH.jpg" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content">
                                            <p class="title is-4">QuIP</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        Quip (Quotes Inspiring People) is a revolutionary app that allows users to search for, create and favorite quotes of their choosing.
                                        <br/>
                                        <a target="blank" className="contact-item" href="https://fast-cliffs-70605.herokuapp.com/home.html">
                                            <span className="icon is-large">
                                                <i className="fas fa-globe-americas fa-3x" />
                                            </span>
                                        </a> 
                                        <a target="blank" className="contact-item" href="https://github.com/haleyb128/QuIP">
                                            <span className="icon is-large">
                                                <i className="fab fa-github-square fa-3x" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tile is-6 is-vertical is-parent">
                            <div className="tile is-child box">
                                <div class="card-image">
                                    <figure class="image is-16by9">
                                        <img src="https://i.imgur.com/Cne8Mr0.jpg" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content">
                                            <p class="title is-4">Frankly</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        The Frankly project empowers users to uncover business jargon that has 
                                        become ubiquitous in corporate communications. 
                                        <br/>
                                        <a target="blank" className="contact-item" href="https://violetproject.herokuapp.com/index.html">
                                            <span className="icon is-large">
                                                <i className="fas fa-globe-americas fa-3x" />
                                            </span>
                                        </a>
                                        <a target="blank" className="contact-item" href="https://github.com/haleyb128/Frankly">
                                            <span className="icon is-large">
                                                <i className="fab fa-github-square fa-3x" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="tile is-child box">
                                <div class="card-image">
                                    <figure class="image is-16by9">
                                        <img src="https://i.imgur.com/rlDYx6w.jpg" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content">
                                            <p class="title is-4">Friend Finder</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        A matchmaking service for friends that includes the most important 
                                        characteristic: favorite memes!!
                                        <br/>
                                        <a target="blank" className="contact-item" href="https://friend-finder-hbelden.herokuapp.com/">
                                            <span className="icon is-large">
                                                <i className="fas fa-globe-americas fa-3x" />
                                            </span>
                                        </a> 
                                        <a target="blank" className="contact-item" href="https://github.com/haleyb128/FriendFinder">
                                            <span className="icon is-large">
                                                <i className="fab fa-github-square fa-3x" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )}
        burgerToggle = function() {
            let linksEl = document.querySelector('.narrowLinks');
            if (linksEl.style.display === 'block') {
                linksEl.style.display = 'none';
            } else {
                linksEl.style.display = 'block';
            }
        }
}