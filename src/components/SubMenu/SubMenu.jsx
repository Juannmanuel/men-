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
      <Navbar />
      <div className={style.container_submenu}>
        {titles.map((item) => (
          <div className={style.title_submenu}>
            <Link to="/menu">
              <h2>{item}</h2>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default SubMenu;
