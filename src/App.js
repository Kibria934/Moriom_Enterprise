import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./HomePage/Home";
import Dreawer from "./SharedPage/Dreawer";
import Navbar from "./SharedPage/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <div className="App ">
      <Navbar />
      <Dreawer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
