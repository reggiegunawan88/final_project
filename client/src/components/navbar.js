import React from "react";
import "../components/style/navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo-naripan-motor.jpg";

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Navbar className="menu-bar" bg="" expand="lg" sticky="top">
              <Navbar.Brand href="#home">
                <img src={logo} />
              </Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link>Home</Nav.Link>
                  <Nav.Link>Naripan Motor</Nav.Link>
                  <Nav.Link className="nav-carimobil">Cari Mobil</Nav.Link>
                  <Nav.Link>Jual Mobil Anda</Nav.Link>
                  <Nav.Link>Body Repair</Nav.Link>
                  <Nav.Link>News</Nav.Link>
                  <Nav.Link>Hubungi Kami</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
