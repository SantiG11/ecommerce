import "./App.css";
import { HeaderComponent, ProductContainer } from "../src/components/index";

function App() {
  return (
    <div className="app">
      <HeaderComponent />
      <div className="horizontal-line"></div>
      <ProductContainer />
    </div>
  );
}

export default App;
