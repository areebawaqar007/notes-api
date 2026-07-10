// It creates the server and tells it how to handle requests.
import express from "express";
const app = express();
app.use(express.json());
export default app;


