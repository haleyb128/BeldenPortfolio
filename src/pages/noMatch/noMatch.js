
import React, { Component } from 'react';
import { Navbar } from "../../components/navbar/navbar";

export class NoMatch extends Component {
render() {
    return (
    <div className="no-match">
      <section className="hero is-light is-fullheight">
        <div className="hero-head">
        <Navbar/>
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