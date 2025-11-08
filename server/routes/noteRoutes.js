import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
});

router.post("/", async (req, res) => {
  const note = await Note.create({ content: req.body.content });
  res.json(note);
});

export default router;
