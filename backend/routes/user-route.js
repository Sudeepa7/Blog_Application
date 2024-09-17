import express from "express";
import { getAllUsers, signUp } from "../controller/user-controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/signup", signUp);
export default router; 