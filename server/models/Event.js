import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Event", eventSchema);
