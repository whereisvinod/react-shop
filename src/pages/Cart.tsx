import { useAppContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/order-confirmation");
  };

  const totalAmount = state.cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <Link to="/products" style={{ marginRight: "20px" }}>
        Continue Shopping
      </Link>
      <h2>Cart Items</h2>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {state.cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>
                {item.title} - ${item.price}
              </span>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }>
                Remove
              </button>
            </div>
          ))}
          <p className="total">Total: ${totalAmount}</p>
          <button className="place-order-button" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
