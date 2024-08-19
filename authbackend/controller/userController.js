import User from "../models/userModels.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ExpressError from "../utils/ExpressError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const JWT_SECRET = "fasdflaksjflksadjfl";

export const createUser = AsyncHandler(async (req, res) => {
  const { name, password, email, mobile_no } = req.body;

  if (!name || !password || !email || !mobile_no) {
    throw new ExpressError("All fields are required", false, 400);
  }

  const existingUser = await User.findOne({
    $or: [{ name }, { email }, { mobile_no }],
  });
  if (existingUser) {
    throw new ExpressError("User already exist", false, 400);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    password: hashedPassword,
    email,
    mobile_no,
  });

  const saveUser = await user.save();

  res.status(201).json({ saveUser, success: "true" });
});

export const loginUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ExpressError("All fields are required", false, 400);
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ExpressError("Invalid email or password.", false, 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new ExpressError("Invalid email or password.", false, 401);
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET || JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  res.status(200).json({
    success: true,
    token,
    user,
  });
});
