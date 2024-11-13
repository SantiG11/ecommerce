import { useEffect, useState } from "react";
import "./BigProductImage.css";

export function BigProductImage({ bigImage, nextImage, prevImage }) {
  return (
    <div className="big-product-image-container">
      <div className="prev-btn" onClick={prevImage}>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <img
        src={`${bigImage}`}
        alt="Product image"
        className="big-product-image"
      />
      <div className="next-btn" onClick={nextImage}>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
