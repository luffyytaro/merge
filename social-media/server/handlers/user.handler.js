import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const {sign} = jwt;

export async function register(req, res) {
    try {
        let {username, email, password } =req.body;
       if(username.length <4) return res.status(400).json({msg:"username is too small"});
       if(!/[a-z0-9\.]+@[a-z0-9]+\.[a-z]{2,6}/.test(email)) return res.status(400).json({msg:"invalid email"});
       if(password.length <4) return res.status(400).json({msg:"password not big enough!"});

        let user = await userModel.findOne({ $or:[{username},{email}]});
        if(user && user.username == username) return res.status(400).json({ msg: "username already exist" });
        if(user && user.email == email) return res.status(400).json({msg:"email already exist"});
        let hashedPassword = await bcrypt.hash(password,10);
        await userModel.create({
            username,
            email,
            password:hashedPassword
        });
        return res.status(201).json({msg:"registration completed"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "some error occured" });
    }
}


export default function login(req,res) {
    try {
        let { username, password } = req.body;
        let user =  userModel.findOne({username});
       if(!user) return res.status(401).json({msg:"Invalid username or password"});
       let isValid =  bcrypt.compare(password,user.password);
        if(isValid){
            let token =  sign({
                username: user.username,
                userId:user._id
            },process.env.SECRET_KEY,{
                expiresIn:"24h"
            });
            return res.status(200).json({msg:"Login successful",token})
        }
        return res.status(201).json({msg:"invalid username or password"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "some error occured" });
    }
}


