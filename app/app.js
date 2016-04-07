import React from "react";
import { Router, Route, IndexRoute, Link, History } from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Master from "./components/master";
import Home from "./components/home";
import Projects from "./components/projects";
import JagadeshComponent from "./components/sample-jagadesh";
import VarunComponent from "./components/sample-varun";

React.render(
  <Router history={createBrowserHistory()}>
    <Route path="/" component={Master}>
      <IndexRoute component={Home} />
      <Route path="projects" component={Projects}>
        <Route path="jagadesh" component={JagadeshComponent} />
        <Route path="varun" component={VarunComponent} />
      </Route>
    </Route>
  </Router>,
  document.getElementById("app")
);
