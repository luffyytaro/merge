import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navbar";
import Post from "../components/post";
import Search from "../components/search";
import Profile from "../components/profile";

export default function Home(){
    const navigate = useNavigate();
    const [page, setPage] = useState("search");

    const logout = ()=> {
        localStorage.removeItem("token");
        navigate("/login", { replace: true})
    }
    return(
        <main className="h-screen">
            <NavBar setPage={setPage}/>
            <main className="w-full h-full pb-16 lg:ps-16 flex items-center justify-center">
                {page === "home" && <Post/>}
                {page === "search" && <Search/>}
                {page === "profile" && <Profile/>}
            </main>
            <button onClick={logout} className="items-center">Logout</button>
        </main>
    );
}
