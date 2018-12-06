import React, { Component } from 'react';
import {BrandStatement} from "../../components/brandStatement/brandStatement";
import { Intro } from "../../components/intro/intro";
import { Navbar } from "../../components/navbar/navbar";

export class Home extends Component {
    render() {
      return (
    <div className="Home">
        <section class="hero is-light is-fullheight">
          <div class="hero-head">
            <Navbar/>
          </div>
          <Intro/>
        </section>
        <BrandStatement/>
      </div>
    );
}
}