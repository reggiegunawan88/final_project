import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Image } from "semantic-ui-react";

const img_slideshow = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([{ url: "../../../assets/kia-rio.jpg" }]);
  }, []);

  console.log(images);

  const renderImg = (item) => {
    if (item) {
      let url = item + "";
      console.log(url);
      <Image src={require("../../../assets/kia-rio.jpg")} />;
    }
  };

  return (
    <div>
      <Carousel autoplay infiniteLoop showThumbs={true}>
        {/* {images.map((image) => renderImg(image.url))} */}
        <figure>
          <Image src={require("../../../assets/kia-rio.jpg")} />
        </figure>
        {/* <Image src={require("../../../assets/kia-rio.jpg")} />
        <Image src={require("../../../assets/kia-rio.jpg")} />
        <Image src={require("../../../assets/kia-rio.jpg")} />
        <Image src={require("../../../assets/kia-rio.jpg")} /> */}
      </Carousel>
    </div>
    // <AliceCarousel>
    //   <img src={"../../../assets/kia-rio.jpg"} />
    //   <Image src={require("../../../assets/kia-rio.jpg")} />
    //   <Image src={require("../../../assets/kia-rio.jpg")} />
    //   <Image src={require("../../../assets/kia-rio.jpg")} />
    //   <Image src={require("../../../assets/kia-rio.jpg")} />
    //   <Image src={require("../../../assets/kia-rio.jpg")} />
    // </AliceCarousel>
  );
};

export default img_slideshow;
