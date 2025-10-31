 
import React, { useState } from "react";
import API from "../api/api.js";

export default function CreateTestimonial() {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/testimonials", { content });
      alert("Tu testimonio fue enviado para aprobación.");
      setContent("");
    } catch {
      alert("Error al enviar testimonio");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Testimonio</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Escribe tu testimonio..."
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
