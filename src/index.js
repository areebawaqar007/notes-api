import dotenv from "dotenv";
import connectDB from "./config/database.js";

import app from "./app.js";
// Load env variables
dotenv.config({
  path: "./.env",
});

const startServer = async () => {
  try {
    await connectDB();

    app.on("error", (error) => {
      console.log("ERROR:", error);
      throw error;
    });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.log("Server failed to start:", error);
  }
};

startServer();