import useCart from "../../../hooks/useCart";

import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="card">
      <div className="cardTop">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
        <div>
          Total:{" "}
          {cart.items.reduce(
            (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
            0
          )}
        </div>
      </div>
      <div className="cardTitle">
        <span>Your cart</span>
        <span className="card_amount">
          {cart.total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </div>
      <div className="cardBody">
        <div className="cart">
          {cart.items.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
