import { Schema } from "mongoose";

let userSchema = Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      unique: true,
      type: String,
      trim: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      trim: true,
      required: true,
      default: "male",
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);
export default userSchema;
