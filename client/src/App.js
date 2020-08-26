import React, { Component } from "react";
import "./App.css";
import "./components/style/pagination.css";
import Navbar from "./components/pages/page_components/mainpage/navbar";
import Footer from "./components/pages/page_components/mainpage/footer";
import MainContent from "./components/pages/mainpage";
import ProductDetail from "./components/pages/productdetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ overflowX: "hidden" }}>
          <Navbar />
          <Router>
            <Switch>
              <Route exact path="/" component={MainContent} />
              <Route path="/productdetail" component={ProductDetail} />
            </Switch>
          </Router>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
