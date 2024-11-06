import { useContext, useEffect, useState } from "react";
import "./CartStyle.css";
import { EcommerceContext } from "../../context/EcommerceContext";
import { CartItem } from "../CartItem/CartItem";

export function Cart() {
  const { cartItems, setCartItems, showCartItems } =
    useContext(EcommerceContext);

  const handleDelete = (e) => {
    const id = e.target.parentNode.parentNode.id;

    const updatedCartItems = cartItems.filter((item) => item.name !== id);

    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className="cart">
      <div className="cart-header">
        <p>Cart</p>
      </div>
      <div className="cart-content">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem, index) => (
            <CartItem
              item={cartItem}
              key={cartItem.name + index}
              id={cartItem.name}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <div className="empty-msg">
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
}
