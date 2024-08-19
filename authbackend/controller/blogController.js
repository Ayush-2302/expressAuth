import AsyncHandler from "../utils/AsyncHandler.js";

export const createBlog = AsyncHandler(async (req, res) => {
  const { title, content } = req.body;
  console.log(title, "title");
  console.log(content, "content");
  const image = req.file;
  console.log(image, "image");

  res.send("user authenticated");
});
