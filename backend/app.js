import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-route.js";

const app = express();

app.use("/api/user",router);

mongoose.connect('mongodb+srv://sudeepanirmani77:gtKmrGukUx7enlnn@cluster0.vqzlw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => app.listen(5000)).then(() => console.log("Connected to MongoDB listening to local host port:5000")).catch((err) => console.log(err));

app.use("/", (req, res, next) => {
    res.send("Hello World !");
});

//username = sudeepanirmani77
//password = gtKmrGukUx7enlnn