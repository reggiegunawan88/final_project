import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

// PAGE COMPONENT
import MainPage from "./pages/mainpage";
import ProductDetail from "./pages/productdetail";
import Navbar from "./page_components/navbar/navbar";

const pageRouter = () => (
  <Router>
    <QueryParamProvider ReactRouterRoute={Route}>
      <Navbar />
      <Switch>
        <Route path="/carimobil" component={MainPage}></Route>
        <Route path="/productdetail" component={ProductDetail} />
      </Switch>
    </QueryParamProvider>
  </Router>
);

export default pageRouter;
