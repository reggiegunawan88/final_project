import React from "react";
import "./../../style//navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./../../../assets/logo-naripan-motor.jpg";

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Navbar className="menu-bar" bg="" expand="lg" sticky="top">
              <Navbar.Brand href="/carimobil">
                <img src={logo} alt="Naripan Motor" />
              </Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="http://naripanmotor.com/">Home</Nav.Link>
                  <Nav.Link href="https://naripanmotor.com/naripan-motor">
                    Naripan Motor
                  </Nav.Link>
                  <Nav.Link className="nav-carimobil" href="/carimobil">
                    Cari Mobil
                  </Nav.Link>
                  <Nav.Link href="https://naripanmotor.com/jual-mobil-anda">
                    Jual Mobil Anda
                  </Nav.Link>
                  <Nav.Link href="http://naripanmotor.com/body-repair-and-oven-painting">
                    Body Repair
                  </Nav.Link>
                  <Nav.Link href="http://naripanmotor.com/news">News</Nav.Link>
                  <Nav.Link href="http://naripanmotor.com/hubungi-kami">
                    Hubungi Kami
                  </Nav.Link>
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
