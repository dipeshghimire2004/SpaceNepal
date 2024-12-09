import { Router } from "express";
import {
  createBlogController,
  deleteBlogController,
  readAllBlogsController,
  readSpecificBlogController,
  updateSpecificBlogController,
} from "../controller/blogController.js";

let blogRouter = Router();
blogRouter.route("/").post(createBlogController).get(readAllBlogsController);

blogRouter
  .route("/:id")
  .get(readSpecificBlogController)
  .patch(updateSpecificBlogController)
  .delete(deleteBlogController);

export default blogRouter;
