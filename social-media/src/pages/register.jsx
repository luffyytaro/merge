import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useFormik} from "formik";
import validate from "../validation/register";
import toast from "react-hot-toast";

export default function Register(){
   const navigate = useNavigate();
   const formik = useFormik({
    InitialValues:{
        username:"",
        email:"",
        password:"",
        cpassword:""
    },
    validate: validate,
    validateOnBlur: false,
    validateOnChange: false,
    onsubmit:(values) =>{
        let (cpassword, ...rest) = values;
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
        <main className="size-full bg-yellow-200">
            <section>
                <h2>SignUp to Adhigram</h2>
                <form>
                    
                </form>
            </section>
        </main>
    );
}
