import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Sitemap from "./components/Sitemap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Switch>
      <Route exact path="/sitemap.xml">
        <Sitemap />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>
);
