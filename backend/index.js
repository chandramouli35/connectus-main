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
import { app } from "./app.js";
import databaseConnection from "./config/database.js";

dotenv.config({ path: "./.env" });

databaseConnection()
  .then(() => {
    console.log(`Database connected successfully.`);
  })
  .catch((error) => {
    console.error(`Database connection error: ${error}`);
  });

// Export the app for serverless function handling
export default app;
