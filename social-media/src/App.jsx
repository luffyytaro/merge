import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/register";
import {Toaster} from "react-hot-toast";
import Login from "./pages/login";
import Home from "./pages/home";
import Auth from "./middleware/auth";


function App() {
  return(
    <main className="h-screen w-screen">
      <Toaster position="bottom-center"/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Auth><Home/></Auth>}/>
        <Route path="/register" Component={Register}/>
        <Route path="/login" Component={Login} />
      </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;

