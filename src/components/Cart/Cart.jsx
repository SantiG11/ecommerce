import { useContext, useEffect, useState } from "react";
import "./CartStyle.css";
import { EcommerceContext } from "../../context/EcommerceContext";
import { CartItem } from "../CartItem/CartItem";

import { CheckoutModal } from "../CheckoutModal/CheckoutModal";
import { OrangeButton } from "../CheckoutButton/OrangeButton";

export function Cart() {
  const { cartItems, setCartItems, setShowCheckout, setModalBackdrop } =
    useContext(EcommerceContext);

  const openCheckout = () => {
    setShowCheckout(true);
    setModalBackdrop(true);
  };

  const handleDelete = (e) => {
    const id = e.target.parentNode.parentNode.id;

    const updatedCartItems = cartItems.filter((item) => item.name !== id);

    setCartItems(updatedCartItems);
  };

  return (
    <>
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

          {cartItems.length > 0 && (
            <OrangeButton text="Checkout" action={openCheckout} />
          )}
        </div>
      </div>
    </>
  );
}
