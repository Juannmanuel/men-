import { Link } from "react-router-dom";
import style from "./SubMenu.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function SubMenu() {
  const titles = [
    "Cafetería",
    "Bebidas",
    "Comida",
    "Menú del Día",
    "Menú Infantil",
  ];
  return (
    <section className={style.submenu_main}>
      <h2><Link to={"/menu"}>Submenu</Link></h2>
    </section>
  );
}

export default SubMenu;
