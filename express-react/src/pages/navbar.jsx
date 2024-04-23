import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <main>
            <h1>NAVBAR</h1>
            <Link to={"/"}>HOME</Link>
            <Link to={"/contact"}>CONTACT</Link>
            <Link to={"/about"}>ABOUT</Link>
        </main>
    );
}