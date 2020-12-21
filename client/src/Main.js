import React, { Component } from "react";
import "./Main.css";
import "./components/style/pagination.css";
import PageRouter from "./components/pageRouter";
import LoginAdmin from "./admin_dashboard/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/carimobil" component={PageRouter}></Route>
            <Route path="/admin" component={LoginAdmin}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
