import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Media from "./pages/Media";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/about"} element={<About/>}/>
          <Route path={"/media"} element={<Media/>}/>
          <Route path={"/contact"} element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
