import { useEffect, useState } from "react";

import useCart from "../../../hooks/useCart";
import { FormattedShoe } from "../../../dto/shoe.dto";
import useShoeAdapter from "../../../hooks/useProductAdapter";

import ShoeItem from "./ShoeItem";

export const ShoeList = () => {
  const shoeAdapter = useShoeAdapter();
  const { cart, addToCart } = useCart();
  const [shoes, setShoes] = useState<FormattedShoe[]>([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const shoes = await shoeAdapter.getShoes();
        setShoes(shoes);
      } catch (error) {
        console.log("Error fetching shoes", error);
      }
    };

    fetchShoes();
  }, [shoeAdapter]);

  const checkIfInCart = (id: string) => {
    return cart.items.some((item) => item.id === id);
  };

  return (
    <div className="card">
      <div className="cardTop">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
      </div>
      <div className="cardTitle">Our Products</div>
      <div className="cardBody">
        <div>
          <h2>ShoeList</h2>
          {shoes.map((shoe) => (
            <ShoeItem
              shoe={shoe}
              onAddToCart={addToCart}
              isExistingCart={checkIfInCart(shoe.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
