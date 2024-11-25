import { useContext, useEffect, useState } from "react";
import { DetailsContainer } from "../DetailsContainer/DetailsContainer";
import { ProductImages } from "../ProductImages/ProductImages";
import "./ProductContainerStyle.css";
import { EcommerceContext } from "../../context/EcommerceContext";

export function ProductContainer({ department }) {
  const { items } = useContext(EcommerceContext);
  const [products, setProducts] = useState([]);

  const filteredItems = items.filter((item) => item.department === department);

  useEffect(() => {
    department ? setProducts(filteredItems) : setProducts(items);
  }, [department]);

  return (
    <div className="products">
      {products.map((product) => (
        <div className="product-container" key={product.name}>
          <ProductImages images={product.images} />
          <DetailsContainer item={product} />
        </div>
      ))}
    </div>
  );
}
