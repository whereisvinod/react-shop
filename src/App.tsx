import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AppProvider, useAppContext } from "./context/AppContext";
import Login from "./pages/Login";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import { PrivateRoute } from "./routes/PrivateRoute";
import OrderConfirmation from "./pages/OrderConfirmation";
import Header from "./components/Header";

function AppContent() {
  const location = useLocation();
  const { state } = useAppContext();

  const showHeader = state.user && location.pathname !== "/login";

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductListing />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/order-confirmation"
          element={
            <PrivateRoute>
              <OrderConfirmation />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
}

export default App;
