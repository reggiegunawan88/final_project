import React from "react";
import { render } from "react-dom";
import "../components/style/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-text">
          <p>© 2020 Naripan Motor</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
