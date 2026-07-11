import { Router } from "express";
import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} from "../controllers/note.controller.js";

import { verifyJWT } from "../middleware/auth.js";

const router = Router();

// Protected Routes
router.route("/create").post(verifyJWT, createNote);
router.route("/getNotes").get(verifyJWT, getNotes);
router.route("/updateNote/:id").patch(verifyJWT, updateNote);
router.route("/deleteNote/:id").delete(verifyJWT, deleteNote);

export default router;