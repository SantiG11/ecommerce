import { useState } from "react";
import { Cart } from "../Cart/Cart";
import "./CartButtonStyle.css";

export function CartButton() {
  const [openCart, setOpenCart] = useState(false);

  const handleClick = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className="cart-button" onClick={handleClick}>
      <img src="src/assets/icon-cart.svg" alt="cart-icon" />
      {openCart && <Cart />}
    </div>
  );
}
