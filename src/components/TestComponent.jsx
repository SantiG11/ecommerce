import { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceContext";

export function TestComponent() {
  const { items } = useContext(EcommerceContext);

  return (
    <div>
      <h1>Test component</h1>
      <p>{items[0].name}</p>
    </div>
  );
}
