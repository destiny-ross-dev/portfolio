import React from "react";
import Index from "./pages/Index/Index";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Blog from "./pages/Blog/Blog";

import { Route, Switch } from "react-router-dom";
import Post from "./pages/Post/Post";

export default (
  <Switch>
    <Route path="/projects" render={props => <Portfolio {...props} />} />
    <Route path="/contact" render={props => <Contact {...props} />} />
    <Route path="/blog/post/:postName" render={props => <Post />} />
    <Route path="/blog" render={props => <Blog {...props} />} />

    <Route path="/resume" render={props => <Resume {...props} />} />
    <Route path="/about" render={props => <About />} />
    <Route exact path="/" render={props => <Index {...props} />} />
  </Switch>
);
