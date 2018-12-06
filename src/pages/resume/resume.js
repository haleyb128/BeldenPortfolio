import React, { Component } from 'react';
import { Navbar } from "../../components/navbar/navbar";

export class Resume extends Component {
    render() {
        return (
            <div className="Home">
                <section class="hero is-light is-fullheight">
                    <div class="hero-head">
                        <Navbar/>
                    </div>
                    <div className= "hero-body">
                        <div className="container has-text-centered">
                            <img src="https://i.imgur.com/kcdmo6W.jpg" alt="Resume" id="resume-image"/>
                        </div>
                    </div>
                </section>
            </div>
        )}
}