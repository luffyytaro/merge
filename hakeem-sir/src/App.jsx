import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import axios from "axios"
import Developer from './pages/developer.jsx';
import { Suspense, lazy } from "react";
import NavBar from "./pages/navbar.jsx";
import Synnefo from "./pages/synnefo.jsx";

function App() {
  axios.defaults.baseURL = location.origin;
  if (import.meta.env.DEV) {
    axios.defaults.baseURL = "http://localhost:4000";
  }
  
const  Register = lazy(()=> import("./pages/register.jsx"));
const Login = lazy(()=> import("./pages/login.jsx"));

  return (
    <main>
      <BrowserRouter>
       <NavBar/>
       <Suspense fallback={<h1>loading....</h1>}>
       <Routes >
          <Route index Component={Synnefo} />
          <Route path="/developer" Component={Developer}/>
          <Route path="/register" Component={Register}/>
          <Route path="/login" Component={Login}/>
        </Routes>
       </Suspense>
      </BrowserRouter>
    </main>
  )
}

export default App
