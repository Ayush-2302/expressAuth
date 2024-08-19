import dotenv from "dotenv";
import cors from "cors";
import app from "./app.js";
import connectDB from "./db/db.js";
dotenv.config();

const port = 5000;

app.use(cors());

app.listen(port, () => {
  connectDB();
  console.log(`Server started on port ${port}`);
});
