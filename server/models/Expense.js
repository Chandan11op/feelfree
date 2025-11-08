import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  desc: String,
  amount: Number,
  type: { type: String, enum: ["income", "expense"] },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Expense", expenseSchema);
