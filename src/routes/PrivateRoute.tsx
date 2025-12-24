import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { state } = useAppContext();
  return state.user ? <>{children}</> : <Navigate to="/login" />;
};
