import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { ShopPage, UserPage, HomePage } from "./pages";
import "./Lib/Themes/FontsBackgrounds.scss";
import "./Lib/axiosConfig";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/UserPage" component={UserPage} />
        <Route exact path="/ShopPage" component={ShopPage} />
      </Switch>
    </Router>
  );
}

export default App;
