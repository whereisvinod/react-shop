import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  const totalAmount = state.cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handleBackToShop = () => {
    dispatch({ type: "CLEAR_CART" });
    navigate("/products");
  };

  return (
    <div className="order-confirmation-container">
      <h2>Order Placed Successfully!</h2>
      <p>Thank you for your purchase, {state.user?.username || "User"}!</p>

      <h3>Order Summary:</h3>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <span>{item.quantity} × ${item.price}</span>
          </li>
        ))}
      </ul>

      <p>
        <strong>Total: ${totalAmount.toFixed(2)}</strong>
      </p>

      <button className="back-button" onClick={handleBackToShop}>
        Back to Shop
      </button>
    </div>
  );
};

export default OrderConfirmation;
