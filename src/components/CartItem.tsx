import React from "react";
import { Product } from "../context/AppContext";
import { useAppContext } from "../context/AppContext";

interface CartItemProps {
  item: Product;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { dispatch } = useAppContext();

  const handleRemove = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
  };

  return (
    <div className="cart-item-container">
      <span>{item.title} - ${item.price}</span>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
