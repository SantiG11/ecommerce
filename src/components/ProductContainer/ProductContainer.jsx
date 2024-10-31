import { useContext, useEffect } from "react";
import { DetailsContainer } from "../DetailsContainer/DetailsContainer";
import { ProductImages } from "../ProductImages/ProductImages";
import "./ProductContainerStyle.css";
import { EcommerceContext } from "../../context/EcommerceContext";

export function ProductContainer() {
  const { items } = useContext(EcommerceContext);

  // useEffect(() => {
  //   console.log(items[0]);
  // }, [items[0]]);

  return (
    <div className="product-container">
      <ProductImages images={items[0].images} />
      <DetailsContainer item={items[0]} />
    </div>
  );
}
