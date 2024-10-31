import { useContext, useEffect, useState } from "react";
import "./CartStyle.css";
import { EcommerceContext } from "../../context/EcommerceContext";
import { CartItem } from "../CartItem/CartItem";

export function Cart() {
  const { cartItems } = useContext(EcommerceContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(cartItems);
    console.log("hola");
  }, [cartItems]);

  return (
    <div className="cart">
      <div className="cart-header">
        <p>Cart</p>
      </div>
      <div className="cart-content">
        {items.length > 0 ? (
          items.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.name} />
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
