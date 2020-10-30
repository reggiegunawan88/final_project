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
    for (let i = 0; i < props.items.img.length; i++) {
      img_data.push({
        original: "/img/" + props.items.img[i].url,
        thumbnail: "/img/" + props.items.img[i].url,
      });
    }
    console.log(img_data);
    return img_data;
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
