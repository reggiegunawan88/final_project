import React from "react";
import "./../style/productdetail.css";
import ImageSlideshow from "../page_components/productdetail/img_slideshow";
import ProductData from "../page_components/productdetail/productdata";
import FeatureList from "../page_components/productdetail/feature_list";
import Description from "../page_components/productdetail/description";

const productdetail = (props) => {
  const data = props.location.data;

  return (
    <div className="container container-product">
      <div className="row mt-100">
        <div className="col-sm-12 mt-5">
          <div className="product-title">
            {data.merk} {data.nama}
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-sm-9">
          <div className="container">
            <ImageSlideshow items={data} />
          </div>
        </div>
        <div className="col-sm-3">
          <ProductData items={data} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-9">
          <FeatureList items={data} />
        </div>
        <div className="col-sm-3">
          <Description />
        </div>
      </div>
    </div>
  );
};

export default productdetail;
