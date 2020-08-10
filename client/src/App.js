import React, { Component } from "react";
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Content from "./components/content";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ overflowX: "hidden" }}>
        <Navbar />
        <Content />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
