// server.js
import express from "express";
import loginRoutes from "./routes/loginRoutes.js";
import agendaRoutes from "./routes/agendaRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/login", loginRoutes);
app.use("/api/agenda", agendaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
