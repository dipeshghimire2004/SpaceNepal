// require('dotenv').config();
import dotenv from 'dotenv'
dotenv.config();
import mongoose from "mongoose";
import { dbUrl } from "../constant.js";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log(`successfully, connected to MongoDB at ${dbUrl}`);
  } catch (error) {
    console.log(error.message);
  }
};
export default connectToMongoDb;
