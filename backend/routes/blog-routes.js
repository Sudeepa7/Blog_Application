import exppress from "express";
import {getAllBlogs} from "../controller/blog-controller.js";

const blogRouter = exppress.Router();

blogRouter.get("/", getAllBlogs);

export default blogRouter;