import React, { Component } from "react";
import "./Main.css";
import "./components/style/pagination.css";
import Navbar from "./components/page_components/navbar/navbar";
import Footer from "./components/page_components/footer/footer";
import PageRouter from "./components/pageRouter";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <PageRouter />
        <Footer />
      </div>
    );
  }
}

export default Main;
