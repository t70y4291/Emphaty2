import pool from "../db.js";

export const createTestimonial = async (req, res) => {
  try {
    const { user_id, title, content } = req.body;

    await pool.query(
      "INSERT INTO testimonials (user_id, title, content) VALUES (?, ?, ?)",
      [user_id, title, content]
    );

    res.status(201).json({ message: "Testimonio creado correctamente" });
  } catch (error) {
    console.error("Error al crear testimonio:", error);
    res.status(500).json({ error: "Error al crear testimonio" });
  }
};

export const getTestimonials = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT t.id, t.title, t.content, t.approved, t.created_at, u.username FROM testimonials t JOIN users u ON t.user_id = u.id WHERE t.approved = 1"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener testimonios:", error);
    res.status(500).json({ error: "Error al obtener testimonios" });
  }
};
