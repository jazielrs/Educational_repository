import { useState, useEffect } from "react";
import "./CommentSection.css";
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";

interface Comment {
  id: string;
  comment: string;
  userId: string;
  datetime: string;
  username: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/comments/getcomments"
        );
        if (!response.ok) {
          throw new Error("Error fetching comments");
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const userId = localStorage.getItem("userId");
    const username = localStorage.getItem("username");

    if (!userId || !username) {
      console.error("Error: No hay usuario autenticado.");
      return;
    }

    const newComment = {
      comment: comment,
      userId: userId,
      username: username,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/comments/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Error al enviar el comentario: ${response.statusText}`
        );
      }

      // En lugar de actualizar solo con el nuevo comentario, recargamos todos los comentarios
      const updatedComments = await fetch(
        "http://localhost:8080/api/comments/getcomments"
      );
      const commentsData = await updatedComments.json();
      setComments(commentsData); // Se actualiza el estado con la lista completa

      setComment("");
    } catch (error: any) {
      console.error("Error al enviar el comentario:", error);
    }
  };

  const handleDelete = async (id: string) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("No hay usuario autenticado.");
      return;
    }

    // Mostrar alerta personalizada con SweetAlert2
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Este comentario será eliminado permanentemente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `http://localhost:8080/api/comments/delete/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              userId: userId, // Enviamos el userId en el header
            },
          }
        );

        if (!response.ok) {
          throw new Error(await response.text());
        }

        setComments(comments.filter((comment) => comment.id !== id)); // Eliminamos el comentario del estado
        Swal.fire("Eliminado", "El comentario ha sido eliminado.", "success"); // Alerta de éxito
      } catch (error) {
        console.error("Error eliminando comentario:", error);
        Swal.fire(
          "Error",
          "Hubo un problema al eliminar el comentario.",
          "error"
        ); // Alerta de error
      }
    }
  };

  return (
    <div className="comment-page">
      <Header />
      <div className="comment-section">
        <h1 className="title">Foro de Tecnología</h1>
        <h2 className="title">Comentarios</h2>

        <form onSubmit={handleSubmit} className="comment-form">
          <textarea
            placeholder="Escribe un comentario..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="comment-input"
          />
          <button type="submit" className="comment-button">
            Publicar comentario
          </button>
        </form>

        <div className="comment-list">
          {comments.length === 0 ? (
            <div>No hay comentarios disponibles.</div>
          ) : (
            comments.map(({ id, comment, username, datetime, userId }) => (
              <div key={id} className="comment-item">
                <div className="comment-avatar">
                  {username ? username[0].toUpperCase() : "?"}
                </div>
                <div className="comment-content">
                  <div className="comment-header">
                    <h3 className="comment-author">{username || "Anónimo"}</h3>
                    <span className="comment-date">
                      {new Date(datetime).toLocaleString()}
                    </span>
                  </div>
                  <p className="comment-text">{comment}</p>

                  {/* 🔹 Solo muestra el botón si el comentario pertenece al usuario autenticado */}
                  {localStorage.getItem("userId") === userId && (
                    <button
                      onClick={() => handleDelete(id)}
                      className="delete-button"
                    >
                      Eliminar
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
