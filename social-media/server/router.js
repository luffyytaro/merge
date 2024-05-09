import { Router } from "express";
import Profile, { register,login, } from "./handlers/user.handler.js";
import Auth from "./middle/auth.js";


const router = Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile").get(Auth,Profile)

export default router;