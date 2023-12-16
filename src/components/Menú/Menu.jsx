import style from "./Menu.module.css";
import { menus } from "../../data/dataProvisoria";
import Card from "../Card/Card";
function Menu() {
  return (
    <div className={style.menu_main}>
      {menus.map((item, index) => (
        <div
          key={index}
          className={style.content_menu}
          style={{ backgroundImage: `url(${item.imagen})` }}
        >
          <div className={style.container_title}>
            <h2>{item.nombre.español}</h2>
          </div>
          <div className={style.container_card}>
            <Card
              nombre={item.nombre}
              categoria={item.categoria}
              id={item.idPlato}
              ingredientes={item.ingredientes}
              precio={item.precio}
              tiempoElaboracion={item.tiempoElaboracion}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
