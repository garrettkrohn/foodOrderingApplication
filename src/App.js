import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Menu from "./Menu/Menu";
import { useState } from "react";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [viewCart, setViewCart] = useState(false);

  const toggleCartView = () => {
    setViewCart(() => !viewCart);
  };

  return (
    <CartProvider>
      {viewCart === true ? <Cart toggle={toggleCartView} /> : ""}
      <Navbar toggle={toggleCartView} />
      <Home />
      <Menu />
    </CartProvider>
  );
}

export default App;
