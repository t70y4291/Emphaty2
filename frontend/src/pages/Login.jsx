import React, { useState } from "react";
import { loginUser } from "../api/api.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(form);
    if (res.token) {
      localStorage.setItem("token", res.token);
      alert("Inicio de sesión exitoso");
      navigate("/");
    } else {
      alert(res.message || "Error en el inicio de sesión");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Correo" onChange={handleChange} /><br />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
