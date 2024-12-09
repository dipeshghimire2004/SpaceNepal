import { model } from "mongoose";
import userSchema from "./schema/userSchema.js";
import blogSchema from "./schema/blogSchema.js";

export let User = model("User", userSchema);
export let Blog = model("Blog", blogSchema);
