import React, { Component } from "react";
import "./App.css";
import "./components/style/pagination.css";
import Navbar from "./components/navbar";
import MainContent from "./components/maincontent";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ overflowX: "hidden" }}>
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
