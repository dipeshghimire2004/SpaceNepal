import { Router } from "express";
import { uploadSingleFileController } from "../controller/fileController.js";
import upload from "../utils/uploadFile.js";

let fileRouter = Router();

fileRouter
  .route("/single")
  .post(upload.single("file"), uploadSingleFileController);

export default fileRouter;