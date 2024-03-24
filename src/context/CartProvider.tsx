import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export interface ICartItem {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  bgColor: string;
  quantity: number;
}

interface ICart {
  items: ICartItem[];
  total: number;
}

export interface ICartContext {
  cart: ICart;
  addToCart: (item: Omit<ICartItem, "quantity">) => void;
  incrementQuantity: (itemId: string) => void;
  decrementQuantity: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
}

export const CartContext = createContext<ICartContext | undefined>(undefined);

const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<ICart>({
    items: [],
    total: 0,
  });

  const addToCart = (selectedItem: Omit<ICartItem, "quantity">) => {
    const existingItem = cart.items.find((item) => item.id === selectedItem.id);
    if (existingItem) {
      return;
    }
    console.log(selectedItem.price);
    setCart({
      ...cart,
      items: [...cart.items, { ...selectedItem, quantity: 1 }],
      total: +(cart.total + selectedItem.price).toFixed(2),
    });
  };

  const incrementQuantity = (itemId: string) => {
    const existingItem = cart.items.find((item) => item.id === itemId);
    if (!existingItem) return;

    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      ),
      total: cart.total + existingItem.price,
    });
  };

  const decrementQuantity = (itemId: string) => {
    const existingItem = cart.items.find((item) => item.id === itemId);
    if (!existingItem) return;

    if (existingItem.quantity === 1) {
      setCart({
        ...cart,
        items: cart.items.filter((item) => item.id !== itemId),
        total: cart.total - existingItem.price,
      });

      return;
    }

    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      ),
      total: cart.total - existingItem.price,
    });
  };

  const removeFromCart = (itemId: string) => {
    const existingItem = cart.items.find((item) => item.id === itemId);
    if (!existingItem) return;

    setCart({
      ...cart,
      items: cart.items.filter((item) => item.id !== itemId),
      total: +(cart.total - existingItem.price * existingItem.quantity).toFixed(
        2
      ),
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
