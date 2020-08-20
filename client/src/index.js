import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
