import React, { Component } from 'react';

export class ContactInfo extends Component {
    render() {
      return (
        <div className="hero-body">
            <div className="container">
              <div className="level">
                {/* <div className="level-item photo-level-item">
                    <h1 className="title">
                        <img src="https://i.imgur.com/cPPhCUv.jpg" alt="Photo" id="logo-mid"/>
                    </h1>
                </div> */}
                <div className="level-item">
                    <div className="container">
                        <h2 className="subtitle is-5 contact-item">
                            haleyb128@gmail.com
                        </h2>
                        <h2 className="subtitle is-5 contact-item">
                            (248)-303-1429
                        </h2>
                        <a target="blank" className="contact-item" href="https://github.com/haleyb128">
                            <span className="icon is-large">
                                <i className="fab fa-github-square fa-3x" />
                            </span>
                        </a>
                        <a target="blank" className="contact-item" href="https://www.linkedin.com/in/haley-belden-b057bb154">
                            <span className="icon is-large">
                                <i className="fab fa-linkedin fa-3x" />
                            </span>
                        </a>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
}
}