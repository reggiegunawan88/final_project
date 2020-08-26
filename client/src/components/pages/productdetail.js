import React, { useState, useEffect } from "react";
import "./../style/productdetail.css";
import Carousel from "./page_components/productdetail/img_slideshow";
import ProductData from "./page_components/productdetail/productdata";
import { withRouter } from "react-router";

const productdetail = (props) => {
  // const [data, setData] = useState([]);

  //save data from incoming props into local storage
  // let savedData = JSON.stringify(props.location.data);
  // localStorage.setItem("productdata", savedData);
  //retrieve and load data froms saved storage

  // useEffect(() => {
  //   setData(JSON.parse(localStorage.getItem("productdata")));
  // }, []);
  // console.log(data);

  const data = props.location.data;
  console.log(data);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 mt-3">
          <div className="product-title">
            <h3>
              {data.merk} {data.nama}
            </h3>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-9">
          <div className="container">
            <Carousel />
          </div>
        </div>
        <div className="col-sm-3">
          <ProductData items={data} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(productdetail);
