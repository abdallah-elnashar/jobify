import express from "express";
import "express-async-errors";
import morgan from "morgan";
// middleware //
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

dotenv.config();

const app = express();
import dotenv from "dotenv";

// db and authenticate User

import connectDB from "./db/connect.js";

// routers

import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobsRoutes.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// parse post json
app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);

// middleware //
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.port || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
