import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleImageClick = (category: string, event: React.MouseEvent) => {
      event.preventDefault();
      Swal.fire({
        title: "Educonnect",
        text: `${category}`,
        icon: "question",
        confirmButtonText: "Cerrar",
        background: "#fff",
        customClass: {
          popup: "my-popup",
        },
      });
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/src/images/educacion.png" alt="Logo" />
        </div>
        <nav className="nav">
        <ul>
          <li>
            <a href="#home"
            onClick={() => navigate("/dashboard")}
            >Inicio</a>
          </li>
          <li>
          <a href="#about"
          onClick={(e) => {e.preventDefault(); 
          handleImageClick(
            "Nuestro producto es una plataforma innovadora que integra diversos recursos educativos para facilitar el aprendizaje interactivo. " +
            "Ofrecemos acceso a materiales didácticos, cursos en línea, foros de discusión y herramientas colaborativas, lo que permite a estudiantes y docentes mejorar su experiencia de enseñanza y aprendizaje.",
          e
          );
          }}
          >
          Acerca de
          </a>
          </li>
          <li>
            <a href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleImageClick(
                "Nuestros servicios incluyen la integración de recursos educativos digitales. " +
                  "Facilitamos herramientas avanzadas para mejorar la enseñanza " +
                  "y el aprendizaje a través de tecnología innovadora.",
                e
              );
            }
            }
            >
            Servicios</a>
          </li>
          <li>
            <a onClick={() => navigate("/login")} href="#contact">Cerrar Sesión</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
