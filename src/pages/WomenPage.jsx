import { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceContext";
import {
  HeaderComponent,
  ModalBackdrop,
  ProductContainer,
} from "../components";
import { CheckoutModal } from "../components/CheckoutModal/CheckoutModal";

export function WomenPage() {
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
      <div className="page-title"></div>
      <h1>Women Sneackers</h1>
      <ProductContainer department={"women"} />
      {showCheckout && <CheckoutModal />}
    </div>
  );
}
