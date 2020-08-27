import React, { useState, useEffect } from "react";
import "./../style/productdetail.css";
import Carousel from "./page_components/productdetail/img_slideshow";
import ProductData from "./page_components/productdetail/productdata";
import { observable } from "mobx";

const productdetail = (props) => {
  const data = props.location.data;

  //abaikan saja
  // const data_router = null;
  // console.log(data);
  // console.log(data_router);

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

export default productdetail;
