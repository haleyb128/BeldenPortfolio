import React, { Component } from 'react';
import { ContactMessage } from "../../components/contactMessage/contactMessage";
import { ContactInfo } from "../../components/contactInfo/contactInfo";
import { Navbar } from "../../components/navbar/navbar";

export class Contact extends Component {
    render() {
      return (
      <div className="Contact">
        <section className="hero is-light is-fullheight">
          <div className="hero-head">
            <Navbar/>
          </div>
          <ContactInfo/>
        </section>
        <ContactMessage/>
      </div>
    );
}
}