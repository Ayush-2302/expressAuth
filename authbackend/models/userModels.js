import mongoose, { Schema, model } from "mongoose";
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /.+@.+..+/,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  mobile_no: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = model("users", userSchema);
export default User;
