import "./App.css";
import { HeaderComponent, ProductContainer } from "../src/components/index";
import { TestComponent } from "./components/TestComponent";

function App() {
  return (
    <div className="app">
      <HeaderComponent />
      <div className="horizontal-line"></div>
      <ProductContainer />
      {/* <TestComponent /> */}
    </div>
  );
}

export default App;
