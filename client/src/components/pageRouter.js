import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGE COMPONENT
import MainContent from "./pages/mainpage";
import ProductDetail from "./pages/productdetail";

const pageRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainContent} />
      <Route path="/productdetail" component={ProductDetail} />
    </Switch>
  </Router>
);

export default pageRouter;
