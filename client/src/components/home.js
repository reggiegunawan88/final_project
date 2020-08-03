import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      mobil: [],
    };
  }

  componentDidMount() {
    this.get_mobil_data();
  }

  get_mobil_data = (_) => {
    return fetch("/mobil").then((response) => {
      return response
        .json()
        .then((result) => {
          this.setState({ mobil: result.data });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  render() {
    return (
      <div>
        <h2>List Mobil Naripan Motor</h2>
        <ul>
          {this.state.mobil.map((mobil) => (
            <li key={mobil.idmobil}>
              {mobil.nama} {mobil.jenis}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
