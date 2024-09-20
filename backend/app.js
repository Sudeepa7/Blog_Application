import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-route.js";
import blogRouter from "./routes/blog-routes.js";
import { getAllUsers } from "./controller/user-controller.js";
import { getAllBlogs } from "./controller/blog-controller.js";

const app = express();
app.use(express.json());

app.use("/api/user",router);
app.use("/api/blog",blogRouter);

mongoose.connect('mongodb+srv://sudeepanirmani77:gtKmrGukUx7enlnn@cluster0.vqzlw.mongodb.net/?retryWrites=true&w=majority')
  .then(() => app.listen(5000))
  .then(() => console.log("Connected to MongoDB listening to localhost port:5000"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Optional: Exit the process if connection fails
  });

//username = sudeepanirmani77
//password = gtKmrGukUx7enlnn