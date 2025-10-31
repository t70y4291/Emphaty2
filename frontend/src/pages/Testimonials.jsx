import React, { useEffect, useState } from "react";
import { getTestimonials, createTestimonial } from "../api/api.js";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({ user_id: "", title: "", content: "" });

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    const data = await getTestimonials();
    setTestimonials(data);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createTestimonial(form);
    alert(res.message);
    loadTestimonials();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Testimonios</h2>

      <form onSubmit={handleSubmit}>
        <input name="user_id" placeholder="ID del usuario" onChange={handleChange} /><br />
        <input name="title" placeholder="Título" onChange={handleChange} /><br />
        <textarea name="content" placeholder="Contenido" onChange={handleChange}></textarea><br />
        <button type="submit">Enviar Testimonio</button>
      </form>

      <h3>Lista de testimonios</h3>
      {testimonials.map((t) => (
        <div key={t.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h4>{t.title}</h4>
          <p>{t.content}</p>
          <small>Por: {t.username}</small>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
