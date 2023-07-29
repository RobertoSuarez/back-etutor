import express from "express";
import mongoose from "mongoose";
import courseRouter from "./routes/course-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
const db = process.env.DB || "mongodb+srv://electrosonix12:u2QQF50ht8JcR7SV@clusteruniversity.cuollpf.mongodb.net/etutor?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());

app.use("/api/user", router);
app.use("/api/course", courseRouter);

mongoose
  .connect(db)
  .then(() => app.listen(port))
  .then(() =>
    console.log(`Connected to database and listening to localhost:${port}`)
  )
  .catch((err) => console.log("error RRR",  err));