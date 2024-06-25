import { GoogleGenerativeAI } from "@google/generative-ai";
const port = 8000;
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/index", async (req, res) => {
  const prompt = req.body.message;
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();
  res.send({ text });
});

app.listen(port, () => console.log(`server is running at port ${port}`));
