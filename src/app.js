// It creates the server and tells it how to handle requests.
import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working");
});
app.use("/api/auth", authRoutes);
export default app;


