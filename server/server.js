import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve the public folder (frontend)
app.use(express.static(path.join(__dirname, "../public")));

// ✅ Handle root route explicitly (so it serves index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
