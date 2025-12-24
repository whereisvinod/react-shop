import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
const Header: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const cartCount = state.cart.length;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <header className="header-container">
      <h1>React Shop</h1>
      <nav>        
        <Link to="/cart" style={{ marginRight: "20px" }}>
          Cart ({cartCount})
        </Link>
        {state.user && (
          <button
            onClick={handleLogout}
            className="logout-button"
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
