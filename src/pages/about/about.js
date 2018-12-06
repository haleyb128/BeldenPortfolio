import React, { Component } from 'react';
import { Navbar } from "../../components/navbar/navbar";

export class About extends Component {
    render() {
      return (
      <div className="Contact">
        <section className="hero is-light is-fullheight">
          <div className="hero-head">
            <Navbar/>
          </div>  
          <div className="hero-body">
            <div className="container has-text-centered">
              <figure className="image is-128x128 is-horizontal-center">
                <img src="https://i.imgur.com/cPPhCUv.jpg" alt="Haley" id="self-portrait" className=" is-rounded" />
              </figure>
              <h2 className="subtitle">
                Hello! My name is Haley Belden and I've spent most of my life obsessed with languages. While I spent years working as a translator in the United States and Argentina, I've now begun working with another category: programming languages.

                I spent a long time searching for a way to combine my love for creating new things and my love for languages and learning, which I have found in web development.

              </h2>
            </div>
          </div>
        </section>
        {/* <ContactForm/> */}
      </div>
    );
}
}