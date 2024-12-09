import { config } from "dotenv";

config();
export const port = process.env.PORT || 8000;
// export const dbUrl = process.env.DB_URL;
export const dbUrl = process.env.DB_URL || `mongodb://localhost:27017/blog`;




// export const port = 8000;
// export const dbUrl = mongodb://localhost:27017/blogapp;
// mongodb://localhost:27017
// // export const serverUrl = process.env.SERVER_URL;


// import { config } from "dotenv";

// config();
// export const port = 8000;
// export const dbUrl = `mongodb://localhost:27017/blog`;