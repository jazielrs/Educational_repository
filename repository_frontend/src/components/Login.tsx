import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Asumimos que el backend devuelve el userId y username
        const { userId, username } = response.data; 

        // Guardamos el userId y el username en el localStorage
        localStorage.setItem("userId", userId);
        localStorage.setItem("username", username); // Guardamos el nombre de usuario

        setMessage("Usuario autenticado exitosamente");
        setTimeout(() => navigate("/dashboard"), 500);
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400 || error.response.status === 401) {
          setMessage("Ingrese un usuario y una contraseña válida");
        }
      } else {
        setMessage("No se pudo conectar con el servidor.");
      }
    }
  };

  return (
    <div className="login-page">
      <Header />
      <div className="login-container">
        <div className="login-card">
          <h2>Iniciar Sesión</h2>
          <input
            type="email"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Ingresar</button>
          {message && <p className="message">{message}</p>}

          {/* Botón para redirigir a la página de registro */}
          <p className="register-link">
            ¿No tienes cuenta?{" "}
            <button
              className="register-button"
              onClick={() => navigate("/register")}
            >
              Regístrate aquí
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
