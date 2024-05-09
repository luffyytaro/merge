import pkg from "jsonwebtoken";

const {verify} =pkg;

export default async function Auth(req,res,next){
    try {
        const key=req.headers.authorization
        console.log(key);
        if(!key) return res.status(403).send("unauthorized access");
            const token = key.split(" ")[1];
            const auth = await verify(token,process.env.SECRET_KEY);
            console.log(auth.userId);
            req.user=auth
            next()
    } catch (error) {
        return res.status(401).send({msg:"some error occured"})
    }
}