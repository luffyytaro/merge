import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useFormik} from "formik";
import validate from "../validation/register.js";
import toast from "react-hot-toast";
import Input from "../components/input";
import Button from "../components/button.jsx"

export default function Register(){
   const navigate = useNavigate();
   const formik = useFormik({
    initialValues:{
        username:"",
        email:"",
        password:"",
        cpassword:"",
    },
    validate: validate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit:(values) =>{
        let {cpassword, ...rest} = values;
        let res = axios.post("/api/register",rest);
        toast.promise(res,{
            loading:"registering",
            success:()=>{
                navigate("/login",{replace:true});
                return "registration completed"
            },
            error:"registration failed"
        });
    }
   });
    return(
        <main className="size-full bg-blue-600 flex items-center justify-center">
            <section>
                <h2>SignUp to Adhigram</h2>
                <form onSubmit={formik.handleSubmit}>
                    <Input type="text" placeholder="username"{...formik.getFieldProps("username")}/>
                    <article>
                        {formik.errors.username}
                    </article>
                    <Input type="email" placeholder="email"{...formik.getFieldProps("email")}/>
                    <article>
                        {formik.errors.email}
                    </article>
                    <Input type="password" placeholder="password"{...formik.getFieldProps("password")}/>
                    <Input type="password" placeholder="confirm password"{...formik.getFieldProps("cpassword")}/>
                    <article>
                        {formik.errors.password}
                    </article>
                    <Button>register</Button>
                    <div className="w-5/6 h-0.5 bg-black"></div>
                    <article>Already have an account?<Link to={"/login"}>Login</Link></article>
                </form>
            </section>
        </main>
    );
}
