import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { Route, Routes, useParams, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import SubMenu from "./components/SubMenu/SubMenu";
import Menu from "./components/Menú/Menu";

function App() {
  const [count, setCount] = useState(0);
  const language = useSelector((state) => state.language);
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="app_main">
      <Navbar/>
      <Routes>
        <Route path="/submenu" element={<SubMenu />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
