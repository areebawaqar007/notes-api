// It creates the server and tells it how to handle requests.

import express from "express";
import authRoutes from "./routes/auth.route.js";
import noteRoutes from "./routes/note.route.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working");
});

// Authentication APIs
app.use("/api/auth", authRoutes);

// Notes APIs
app.use("/api/notes", noteRoutes);

export default app;


// POST    /api/auth/register
// POST    /api/auth/login
// POST    /api/auth/logout

// POST    /api/notes/create
// GET     /api/notes/getNotes
// PATCH   /api/notes/updateNote/:id
// DELETE  /api/notes/deleteNote/:id