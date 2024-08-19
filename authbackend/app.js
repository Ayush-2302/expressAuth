import express from "express";
import userRouter from "./routes/userRoutes.js";
import blogRouter from "./routes/blogRouter.js";

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ message: err.message });
});

export default app;
