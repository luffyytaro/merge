import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <main>
            <a href=""><h2>Synnefo Solutions</h2></a>
            <Link to={"/developer"}>Developer</Link>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Login</Link>
        </main>
    );
}