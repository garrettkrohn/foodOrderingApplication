import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Menu from "./Menu/Menu";
import { useState } from "react";
import Cart from "./Cart/Cart";

function App() {
  const [viewCart, setViewCart] = useState(false);

  const toggleCartView = () => {
    setViewCart(() => !viewCart);
  };

  return (
    <>
      {viewCart === true ? <Cart toggle={toggleCartView} /> : ""}
      <Navbar toggle={toggleCartView} />
      <Home />
      <Menu />
    </>
  );
}

export default App;
