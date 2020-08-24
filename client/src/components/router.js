import React from "react";
import { Route } from "react-router";

// PAGE COMPONENT
import ProductDetail from "../components/pages/productdetail";

const createRoutes = () => (
  <Route exact path="/productdetail" component={ProductDetail} />
);

export default createRoutes;
