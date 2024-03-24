import CartProvider from "../../context/CartProvider";

import Cart from "./cart";
import ShoeList from "./products";

function Home() {
  return (
    <div className="mainContent">
      <CartProvider>
        <ShoeList />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default Home;
