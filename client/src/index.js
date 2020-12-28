import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main";
import registerServiceWorker from "./registerServiceWorker";

//css library
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
