import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { Image } from "semantic-ui-react";
import "react-image-gallery/styles/css/image-gallery.css";

const img_slideshow = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([
      {
        original:
          "https://naripanmotor.com/wp-content/uploads/2020/09/8014.jpeg",
        thumbnail:
          "https://naripanmotor.com/wp-content/uploads/2020/09/8014.jpeg",
      },
      {
        original:
          "https://naripanmotor.com/wp-content/uploads/2020/09/8015.jpeg",
        thumbnail:
          "https://naripanmotor.com/wp-content/uploads/2020/09/8015.jpeg",
      },
    ]);
  }, []);
  // console.log(images);

  const renderImg = (item) => {
    if (item) {
      let url = item + "";
      console.log(url);
      <Image src={require("../../../../assets/kia-rio.jpg")} />;
    }
  };

  return (
    <div>
      {/* <Carousel autoplay infiniteLoop showThumbs={true}> */}
      {/* {images.map((image) => renderImg(image.url))} */}
      {/* <figure> */}
      {/* <Image src={require("../../../../assets/kia-rio.jpg")} /> */}
      {/* </figure> */}
      {/* <Image src={require("../../../assets/kia-rio.jpg")} />
        <Image src={require("../../../assets/kia-rio.jpg")} />
        <Image src={require("../../../assets/kia-rio.jpg")} />
        <Image src={require("../../../assets/kia-rio.jpg")} /> */}
      {/* </Carousel> */}
      <div className="image-container">
        <ImageGallery
          items={images}
          autoPlay={false}
          showFullscreenButton
          showPlayButton={false}
          thumbnailPosition="left"
        />
      </div>
    </div>
  );
};

export default img_slideshow;
