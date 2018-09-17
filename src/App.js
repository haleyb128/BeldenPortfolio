import React, { Component } from 'react';
import {Home} from "./pages/home/home";
import {Contact} from "./pages/contact/contact"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NoMatch } from "./pages/noMatch/noMatch";
import { Resume } from "./pages/resume/resume";
import { Projects } from "./pages/projects/projects";
import { About } from "./pages/about/about";
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/projects" component={Projects} />         
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
