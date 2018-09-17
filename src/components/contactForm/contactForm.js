import React, { Component } from 'react';

export class ContactForm extends Component {
    render() {
      return (           
        <section class="hero is-light is-fullheight" id="contact-hero">
          <div class="hero-body">
            <div class="container has-text-centered" id="contact-form">
              {/* <h2>Contact</h2> */}
              <div class="field">
                <div class="control">
                    <input class="input is-dark" type="text" placeholder="Name"/>
                </div>
              </div>
              <div class="field">
                <div class="control">
                    <input class="input is-dark" type="text" placeholder="Email"/>
                </div>
              </div>
              <div class="field">
                <div class="control">
                    <textarea class="textarea is-dark" type="text" placeholder="Message"></textarea>
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                    <button class="button is-primary">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-text">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}
}