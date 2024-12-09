import express, { json } from "express";
import cors from "cors";
import { port } from "./src/constant.js";
import connectToMongoDb from "./src/connectDb/connectToMongoDb.js";
import blogRouter from "./src/router/blogRouter.js";
import fileRouter from "./src/router/fileRouter.js";

let expressApp = express();

connectToMongoDb();
expressApp.use(express.static("./public/"));
expressApp.use(json()); // It is done to make our application to accept JSON data.
expressApp.use(cors());

expressApp.use("/blogs", blogRouter);
expressApp.use("/files", fileRouter);

expressApp.listen(port, () => {
  console.log("app is listening at port 8000");
});
