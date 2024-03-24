import { useContext } from "react";
import { CartContext, ICartContext } from "../context/CartProvider";

type TCart = ICartContext;

const useCart = (): TCart => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("useCart must be used within CartProvider");
  }
  return cartContext;
};

export default useCart;
