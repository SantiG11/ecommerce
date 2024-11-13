import "./App.css";
import { HeaderComponent, ProductContainer } from "../src/components/index";

import { ModalBackdrop } from "./components/ModalBackdrop/ModalBackdrop";
import { useContext } from "react";
import { EcommerceContext } from "./context/EcommerceContext";

function App() {
  const { modalBackdrop } = useContext(EcommerceContext);

  return (
    <div className="app">
      {modalBackdrop && <ModalBackdrop />}
      <HeaderComponent />
      <div className="horizontal-line"></div>
      <ProductContainer />
    </div>
  );
}

export default App;
