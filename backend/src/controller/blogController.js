import {
  createBlogService,
  deleteBlogService,
  readAllBlogService,
  readSpecificBlogService,
  updateBlogService,
} from "../service/blogService.js";

export let createBlogController = async (req, res, next) => {
  let data = req.body;
  try {
    let result = await createBlogService(data);

    res.status(201).json({
      success: true,
      message: "Blog Successfully Created",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readAllBlogsController = async (req, res, next) => {
  try {
    let BlogData = await readAllBlogService();
    res.status(200).json({
      success: true,
      data: BlogData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export let readSpecificBlogController = async (req, res, next) => {
  try {
    // let id = req.params.id;
    let result = await readSpecificBlogService(req.params.id);
    res.status(200).json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export let updateSpecificBlogController = async (req, res, next) => {
  try {
    let result = await updateBlogService(req.params.id, req.body);
    res.status(201).json({
      success: true,
      message: "Blog Updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export let deleteBlogController = async (req, res, next) => {
  try {
    let result = await deleteBlogService(req.params.id);
    res.status(200).json({
      success: true,
      message: "Blog Deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
