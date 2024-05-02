import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/register";

function App() {
  return(
    <main>
      <BrowserRouter>
      <Routes>
        <Route index Component={<>Home</>}/>
        <Route path="/register" Component={Register}/>
      </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;

