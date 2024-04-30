import userModel from "../model/user.model.js";


export async function register(req, res) {
    try {
        let { username, email, password , profile} = req.body;
        console.log(password.length < 4);
       if(username.length <4) return res.status(400).json({msg:"username is too small"});
       if(!/[a-z0-9\.]+@[a-z0-9]+\.[a-z]{2,6}/.test(email)) return res.status(400).json({msg:"invalid email"});
       if(password.length <4) return res.status(400).json({msg:"password not big enough!"});

        let userExist = await userModel.findOne({ username });
        if (userExist) return res.status(400).json({ msg: "username already exist" });
        let hashedPass = await bcrypt.hash(password, 10);
        await userModel.create({ username, email, password: hashedPass, profile });
        return res.status(201).json({ msg: "registration successfully completed" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "some error occured" });
    }
}
