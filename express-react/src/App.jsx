import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import axios from "axios"
import NavBar from './pages/navbar';
import Home from './pages/home';
// import About from './pages/about';
// import Contact from './pages/contact';
import { Suspense, lazy } from "react";

function App() {

  axios.defaults.baseURL = location.origin;
  if (import.meta.env.DEV) {
    axios.defaults.baseURL = "http://localhost:3000";
  }
  // axios.get("/data").then(data => console.log(data));
  const About = lazy(() => import("./pages/about.jsx"));
  const Contact = lazy(() => import("./pages/contact.jsx"));

  return (
    <main>
      <BrowserRouter>
        <NavBar />
        <Suspense fallback={<h1>loading...</h1>}>
        <Routes >
          <Route index Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </main>
  );
}

export default App
