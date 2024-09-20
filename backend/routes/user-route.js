import express from "express";
import { getAllUsers, signUp ,logIn} from "../controller/user-controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/signup", signUp);
router.post("/login",logIn);
export default router; 