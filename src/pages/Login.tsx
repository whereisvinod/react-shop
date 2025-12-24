import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/endpoints";
import { useAppContext } from "../context/AppContext";

const Login = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const user = await loginUser(username, password);
      dispatch({ type: "LOGIN", payload: user });
      navigate("/products");
    } catch (error) {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
