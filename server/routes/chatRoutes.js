import express from "express";
import Chat from "../models/Chat.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { message } = req.body;
  const reply = `Buddy: That's interesting! Tell me more about "${message}".`;

  const chat = await Chat.create({ message, reply });
  res.json(chat);
});

export default router;
