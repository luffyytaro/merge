import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();
    const [page, setPage] = useState("search");
    const logout =()=>{
        localStorage.removeItem("token");
        navigate("/login",{replace:true});
    }
    return(
        <main className="h-screen">
            <main className="w-full h-full pb-16 lg:ps-16 flex items-center justify-center">
            {page === "home" && <Posts/>}
            {page === "search" && <Search/>}
            {page === "profile" && <Profile/>}
            <NavBar setPage={setPage}/>
            </main>
        </main>
    );
}