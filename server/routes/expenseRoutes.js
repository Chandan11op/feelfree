import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Expense.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const { desc, amount, type } = req.body;
  const newEntry = await Expense.create({ desc, amount, type });
  res.json(newEntry);
});

export default router;
