import { useEffect, useState } from "react";

import useCart from "../../../hooks/useCart";
import { FormattedShoe } from "../../../dto/shoe.dto";

// services
import shoeService from '../../../services/shoes';

import ShoeItem from "./ShoeItem";

export const ShoeList = () => {
  const { cart, addToCart } = useCart();
  const [shoes, setShoes] = useState<FormattedShoe[]>([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const shoes = await shoeService.getShoes();
        setShoes(shoes);
      } catch (error) {
        console.log("Error fetching shoes", error);
      }
    };

    fetchShoes();
  }, []);

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
