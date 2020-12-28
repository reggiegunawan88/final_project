import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Main.css";
import "./components/style/pagination.css";
import PageRouter from "./components/pageRouter";

//ADMIN PAGE COMPONENT
import LoginAdmin from "./admin_dashboard/login";
import Dashboard from "./admin_dashboard/dashboard";
import KelolaMobil from "./admin_dashboard/components/mobil/show_data_mobil";
import KelolaMerkMobil from "./admin_dashboard/components/merk/show_data_merk";
import KelolaTipeMobil from "./admin_dashboard/components/tipe/show_data_tipe";

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
            <Route path="/keloladatamobil" component={KelolaMobil}></Route>
            <Route path="/kelolamerkmobil" component={KelolaMerkMobil}></Route>
            <Route path="/kelolatipemobil" component={KelolaTipeMobil}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
