const API_URL = "http://localhost:4000/api";

export const registerUser = async (data) => {
  const res = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const loginUser = async (data) => {
  const res = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getTestimonials = async () => {
  const res = await fetch(`${API_URL}/testimonials`);
  return res.json();
};

export const createTestimonial = async (data) => {
  const res = await fetch(`${API_URL}/testimonials`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
