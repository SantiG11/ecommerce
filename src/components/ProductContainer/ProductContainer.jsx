import { useContext, useEffect } from "react";
import { DetailsContainer } from "../DetailsContainer/DetailsContainer";
import { ProductImages } from "../ProductImages/ProductImages";
import "./ProductContainerStyle.css";
import { EcommerceContext } from "../../context/EcommerceContext";

export function ProductContainer() {
  const { items } = useContext(EcommerceContext);

  return (
    <div className="products">
      {items.map((item) => (
        <div className="product-container" key={item.name}>
          <ProductImages images={item.images} />
          <DetailsContainer item={item} />
        </div>
      ))}
    </div>
  );
}
