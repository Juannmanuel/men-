import { Link } from "react-router-dom";
import style from "./Home.module.css";

function Home() {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    });
  };
  return (
    <section className={style.home_main}>
      <div className={style.container_titles}>
      <Link to="/submenu" onClick={handleLinkClick}>Cafeteria</Link>
      </div>
      <div className={style.container_titles}>
      <Link to="/submenu" onClick={handleLinkClick}>Cafeteria</Link>
      </div>
      <div className={style.container_titles}>
      <Link to="/submenu" onClick={handleLinkClick}>Cafeteria</Link>
      </div>
      <div className={style.container_titles}>
      <Link to="/submenu" onClick={handleLinkClick}>Cafeteria</Link>
      </div>
      <div className={style.container_titles}>
      <Link to="/submenu" onClick={handleLinkClick}>Cafeteria</Link>
      </div>
      <div className={style.container_titles}>
        <Link to="/submenu" onClick={handleLinkClick}>Cafeteria</Link>
      </div>
    </section>
  );
}

export default Home;
