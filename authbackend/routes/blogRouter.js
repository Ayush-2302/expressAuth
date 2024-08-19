import { Router } from "express";
import { createBlog } from "../controller/blogController.js";
import { protect } from "../middleware/userMiddleware.js";
import upload from "../middleware/multerMiddleware.js";

const router = Router();

router.post("/createBlog", protect, upload.single("image"), createBlog);

export default router;
