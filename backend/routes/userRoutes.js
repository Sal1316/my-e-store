// Routes for creating, deleting, updatin users.
import express from "express";
import { createUser, loginUser } from "../controlers/userController.js";

const router = express.Router();

router.route("/").post(createUser); // homepage
router.post("/auth", loginUser);

export default router;
