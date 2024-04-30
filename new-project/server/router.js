import { Router } from "express";
import { register } from "./handlers/user.handler.js";

const router = Router();


router.route("/register").post(register);
export default router;