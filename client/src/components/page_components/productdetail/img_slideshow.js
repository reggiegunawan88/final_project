import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const img_slideshow = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let new_images = renderImg();
    setImages(new_images);
  }, []);

  const renderImg = () => {
    let img_data = [];
    //if local img is not available
    if (!props.items.img) {
      for (let i = 0; i < 5; i++) {
        img_data.push({
          original:
            "http://naripanmotor.com/wp-content/themes/naripanmotor2017/img/img-slider-1.jpg",
          thumbnail:
            "http://naripanmotor.com/wp-content/themes/naripanmotor2017/img/img-slider-1.jpg",
        });
      }
      return img_data;
    } else {
      for (let i = 0; i < props.items.img.length; i++) {
        img_data.push({
          original: "/img/" + props.items.img[i].url,
          thumbnail: "/img/" + props.items.img[i].url,
        });
      }
      return img_data;
    }
  };

  return (
    <div>
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
