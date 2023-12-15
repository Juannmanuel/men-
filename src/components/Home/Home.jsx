import { Link } from "react-router-dom";
import style from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Titles from "../Titles/Titles";
import Carousel from "../Carousel/Carousel";

function Home() {
  const titles = ["Cafetería", "Bebidas", "Comida", "Menú del Día", "Menú Infantil"  ]
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    });
  };
  return (
    <section className={style.home_main}>
    <Carousel/>  
    <Titles/>
    <Footer/>
    </section>
  );
}

export default Home;
