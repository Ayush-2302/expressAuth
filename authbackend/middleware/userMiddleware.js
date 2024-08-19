import jwt, { decode } from "jsonwebtoken";
import ExpressError from "../utils/ExpressError.js";

export const protect = (req, res, next) => {
  let token;

  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
    // console.log(token);
  }

  if (!token) {
    throw new ExpressError("Not authorized, no token", false, 401);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    throw new ExpressError("Not authorized, token failed", false, 401);
  }
};
