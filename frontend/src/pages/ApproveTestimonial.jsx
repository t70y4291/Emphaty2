 
import React, { useEffect, useState } from "react";
import API from "../api/api.js";

export default function ApproveTestimonial() {
  const [pending, setPending] = useState([]);

  const loadPending = () => {
    API.get("/testimonials/pending")
      .then((res) => setPending(res.data))
      .catch(() => alert("Error al cargar pendientes"));
  };

  const approve = async (id) => {
    await API.put(`/testimonials/approve/${id}`);
    loadPending();
  };

  useEffect(() => {
    loadPending();
  }, []);

  return (
    <div>
      <h2>Testimonios pendientes</h2>
      {pending.map((t) => (
        <div key={t.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <strong>{t.name}</strong>
          <p>{t.content}</p>
          <button onClick={() => approve(t.id)}>Aprobar</button>
        </div>
      ))}
    </div>
  );
}
