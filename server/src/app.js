import express from "express";
import studentRoutes from "./routes/students.js";
import cors from "cors";

const app = express();

function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(cors());
app.use(express.json());
app.use(logger);
app.use("/", studentRoutes);

export default app;