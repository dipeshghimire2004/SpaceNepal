import { Schema } from "mongoose";
let blogSchema = Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: { type: String, required: true },
    // author: {
    //   type: Schema.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    tag: { type: String },
    featured: { type: Boolean, required: true, default: false },
    blogImage: {
      type: String,
    },
  },
  { timestamps: true }
);
export default blogSchema;
