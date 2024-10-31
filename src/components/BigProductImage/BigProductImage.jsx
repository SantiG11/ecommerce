import { useEffect, useState } from "react";
import "./BigProductImage.css";

export function BigProductImage({ bigImage }) {
  const [image, setImage] = useState(bigImage);

  useEffect(() => {
    setImage(bigImage);
  }, [bigImage]);

  return (
    <div className="big-product-image-container">
      <img src={`${image}`} alt="Product image" className="big-product-image" />
    </div>
  );
}
