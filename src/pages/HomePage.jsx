import { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceContext";
import {
  HeaderComponent,
  ModalBackdrop,
  ProductContainer,
} from "../components";
import { CheckoutModal } from "../components/CheckoutModal/CheckoutModal";

export function HomePage() {
  const { modalBackdrop, showCheckout } = useContext(EcommerceContext);

  if (showCheckout) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="page">
      {modalBackdrop && <ModalBackdrop />}
      <HeaderComponent />
      <div className="horizontal-line"></div>
      <h1 className="page-title">Home</h1>
      <ProductContainer />
      {showCheckout && <CheckoutModal />}
    </div>
  );
}
