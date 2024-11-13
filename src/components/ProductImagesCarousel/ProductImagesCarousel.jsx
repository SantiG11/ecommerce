import { useState } from "react";
import "./ProductImageCarouselStyle.css";

export function ProductImagesCarousel({ smallImages, method, selectedImage }) {
  const [imageSelected, setImageSelected] = useState(selectedImage);

  const handleSelection = (image) => {
    setImageSelected(image);
  };

  return (
    <div className="carousel">
      {smallImages.map((image, index) => {
        return (
          <img
            onClick={() => {
              method(index), handleSelection(image);
            }}
            src={`${image}`}
            alt="product-image"
            className={`product-image ${
              image === imageSelected ? "selected" : ""
            }`}
            key={index}
          />
        );
      })}
    </div>
  );
}
