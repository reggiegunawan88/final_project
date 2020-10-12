import React, { Component } from "react";
import "./Main.css";
import "./components/style/pagination.css";
import Navbar from "./components/pages/page_components/mainpage/navbar";
import Footer from "./components/pages/page_components/mainpage/footer";
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
