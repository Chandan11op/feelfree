import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Event.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const { title, date } = req.body;
  const event = await Event.create({ title, date });
  res.json(event);
});

export default router;
