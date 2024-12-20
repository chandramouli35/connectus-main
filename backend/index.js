// import dotenv from 'dotenv';
// import { app } from './app.js';
// import databaseConnection from './config/database.js';
// try {
//     dotenv.config({ path: "./.env" });
//     console.log("dotenv loaded");
// } catch (error) {
//     console.log(error);
// }
// databaseConnection()
//     .then(() => {
//         app.on("error", (error) => {
//             console.log("Error : ", error);
//             throw error;
//         })
//         app.listen(process.env.PORT || 8000, () => {
//             console.log(` Server is running at http://localhost:${process.env.PORT}`);
//         })
//     })
//     .catch((error) => {
//         console.log(`MongoDB connection error !!! ${error}`);
//         throw error;
//     })
import dotenv from "dotenv";
import app from "./app.js"; // Use default import
import databaseConnection from "./config/database.js";

// Load environment variables
dotenv.config({ path: "./.env" });

// Connect to the database
databaseConnection()
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Export the app for serverless functions
export default app;
