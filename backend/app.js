import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-route.js";

const app = express();
app.use(express.json());

app.use("/api/user",router);

mongoose.connect('mongodb+srv://sudeepanirmani77:gtKmrGukUx7enlnn@cluster0.vqzlw.mongodb.net/?retryWrites=true&w=majority')
  .then(() => app.listen(5000))
  .then(() => console.log("Connected to MongoDB listening to localhost port:5000"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Optional: Exit the process if connection fails
  });


app.use("/", (req, res, next) => {
    res.send("Hello World !");
});

//username = sudeepanirmani77
//password = gtKmrGukUx7enlnn