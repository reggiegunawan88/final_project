import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Main.css";
import "./components/style/pagination.css";
import PageRouter from "./components/pageRouter";

//ADMIN PAGE COMPONENT
import LoginAdmin from "./admin_dashboard/login";
import Dashboard from "./admin_dashboard/dashboard";
import EditDataPage from "./admin_dashboard/edit_data";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/carimobil" component={PageRouter}></Route>
            {/* below routing for admin page */}
            <Route path="/admin" component={LoginAdmin}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/keloladatamobil" component={EditDataPage}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
