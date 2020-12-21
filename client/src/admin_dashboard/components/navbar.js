import React from "react";
import "./../../components/style/navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./../../assets/logo-naripan-motor.jpg";

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="menu-bar" bg="" expand="lg" sticky="top">
          <Navbar.Brand href="/carimobil">
            <img src={logo} alt="Naripan Motor" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/dashboard">
                <b>HOME</b>
              </Nav.Link>
              <Nav.Link href="/admin">
                <b>LOG OUT</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br />
      </div>
    );
  }
}

export default NavigationBar;
