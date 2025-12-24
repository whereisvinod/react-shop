import React from "react";
import { Product, useAppContext } from "../context/AppContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { state, dispatch } = useAppContext();

  const cartItem = state.cart.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity ? Number(cartItem.quantity) : 0;

  const handleAddToCart = () => dispatch({ type: "ADD_TO_CART", payload: product });
  const handleIncrease = () => dispatch({ type: "INCREASE_QUANTITY", payload: product.id });
  const handleDecrease = () => dispatch({ type: "DECREASE_QUANTITY", payload: product.id });

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>

      {quantity === 0 ? (
        <button className="add-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      ) : (
        <div className="quantity-control">
          <button className="decrease-button" onClick={handleDecrease}>
            -
          </button>
          <span>{quantity}</span>
          <button className="increase-button" onClick={handleIncrease}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
