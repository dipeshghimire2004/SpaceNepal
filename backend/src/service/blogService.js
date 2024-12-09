import { Blog } from "../model/model.js";

export let createBlogService = async (data) => await Blog.create(data);
export let readAllBlogService = async () => await Blog.find({});
export let readSpecificBlogService = async (id) => await Blog.findById(id);
export let updateBlogService = async (id, body) =>
  await Blog.findByIdAndUpdate(id, body, {
    new: true,
  });
export let deleteBlogService = async (id) => await Blog.findByIdAndDelete(id);
