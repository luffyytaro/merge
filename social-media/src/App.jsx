import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/register";
import {Toaster} from "react-hot-toast";


function App() {
  return(
    <main>
      <Toaster position="top-center"/>
      <BrowserRouter>
      <Routes>
        <Route index Component={<>Home</>}/>
        <Route path="/register" Component={Register}/>
        {/* <Route path="/login" Component={login}/> */}
      </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;

