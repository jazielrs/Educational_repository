import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importamos Axios
import "./Register.css";
import Footer from "./Footer";
import Header from "./Header";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username || !formData.password || !formData.email) {
      setMessage("Todos los campos son obligatorios");
      return;
    }

    try {

      const response = await axios.post(
        "http://localhost:8080/api/users/create",
        formData
      );

      if (response.status === 200) {
        setMessage("Usuario registrado exitosamente");
        setTimeout(() => navigate("/login"), 1000);
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400) {
          // Capturar errores de validación desde el backend
          const errorData = error.response.data.errors; // Accede al array de errores
          let errorMessage = "Error al registrar el usuario.<br />";

          // Recorrer cada error y agregar mensajes específicos
          errorData.forEach((err: any) => {
            if (err.field === "username") {
              errorMessage += "\n• El nombre de usuario debe contener mínimo 3 caracteres.<br />";
            }
            if (err.field === "password") {
              errorMessage += "\n• La contraseña debe contener mínimo 6 caracteres.<br />";
            }
          });

          setMessage(errorMessage);
        } else if (error.response.status === 409) {
          setMessage("El usuario ya existe.");
        } else {
          setMessage("Error al registrar el usuario. Intente de nuevo.");
        }
      }
    }
  };

  return (
    <div className="register-page">
      <Header />
      <div className="register-container">
        <div className="register-card">
          <h2>Registro</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">Registrarse</button>
          </form>
          {message && (
            <p className="message" dangerouslySetInnerHTML={{ __html: message }} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
