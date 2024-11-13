import { EcommerceContext } from "./EcommerceContext";
import { mockItems } from "../mocks/mock-items";
import { useState } from "react";

export function EcommerceProvider({ children }) {
  const [items, setItems] = useState(mockItems);

  const [cartItems, setCartItems] = useState([]);

  const [modalBackdrop, setModalBackdrop] = useState(false);

  const showCartItems = () => console.log(cartItems);

  return (
    <EcommerceContext.Provider
      value={{
        items,
        setItems,
        cartItems,
        setCartItems,
        showCartItems,
        modalBackdrop,
        setModalBackdrop,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
}
