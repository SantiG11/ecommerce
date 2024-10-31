import { useContext, useState } from "react";
import "./AddToCartButtonStyle.css";
import { EcommerceContext } from "../../context/EcommerceContext";

export function AddToCartButton({ product }) {
  const { cartItems, setCartItems, showCartItems } =
    useContext(EcommerceContext);

  const handleAddToCart = (item) => {
    const updatedItems = cartItems.length > 0 ? [...cartItems, item] : [item];
    setCartItems(updatedItems);
    showCartItems();
    console.log("click");
  };

  return (
    <div className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
      <img
        src="src/assets/icon-cart-black.svg"
        alt="cart-icon"
        className="cart-icon"
      />

      <p className="add-to-cart">Add to cart</p>
    </div>
  );
}
