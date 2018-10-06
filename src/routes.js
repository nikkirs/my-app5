import React, { Component } from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/App";

import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <IndexRoute component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
  </Route>
);
