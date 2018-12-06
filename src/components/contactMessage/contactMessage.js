import React, { Component } from 'react';

export class ContactMessage extends Component {
    render() {
      return (           
        <section class="hero is-light is-fullheight" id="contact-hero">
          <div class="hero-body">
            <div class="container has-text-centered" id="contact-message">
            <h2 className="subtitle is-size-4 has-text-black is-size-6-mobile" id="contact-message-text">
                I am open to full time and contract opportunities. 
                The most important aspects of a job that I am looking for are the 
                opportunity to learn continuously and work in a team-oriented environment. 
                Please feel free to reach out; especially if these priorities mirror your own or those of your business/client. 
              </h2>
              
            </div>
          </div>
        </section>
    );
}
}