import "./App.css";
import { HeaderComponent, ProductContainer } from "../src/components/index";

import { ModalBackdrop } from "./components/ModalBackdrop/ModalBackdrop";
import { useContext } from "react";
import { EcommerceContext } from "./context/EcommerceContext";
import { CheckoutModal } from "./components/CheckoutModal/CheckoutModal";

function App() {
  const { modalBackdrop, showCheckout } = useContext(EcommerceContext);

  if (showCheckout) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="app">
      {modalBackdrop && <ModalBackdrop />}
      <HeaderComponent />
      <div className="horizontal-line"></div>
      <ProductContainer />
      {showCheckout && <CheckoutModal />}
    </div>
  );
}

export default App;
