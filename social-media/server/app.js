import express from "express";
import dotenv from "dotenv";
import connect from "./connection.js";
import router from "./router.js";
import cors from "cors";

dotenv.config();
const app =express();
app.use(express.json());
app.use(cors());
app.use(express.static("./dist"));
app.use("/api", router);

connect()
.then(() => {
    app.listen(process.env.PORT, error => {
        if (error) return console.log(error);
        console.log("server started");
    })
})