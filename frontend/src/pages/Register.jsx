import React, { useState } from "react";
import { registerUser } from "../api/api.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser(form);
    alert(res.message);
    if (res.message.includes("correctamente")) navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Usuario" onChange={handleChange} /><br />
        <input name="email" placeholder="Correo" onChange={handleChange} /><br />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} /><br />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
