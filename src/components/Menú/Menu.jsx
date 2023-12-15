import style from "./Menu.module.css";
import { menus } from "../../data/dataProvisoria";
import Card from "../Card/Card";
function Menu() {
  return (
    <div className={style.menu_main}>
      {menus.map((item, index) => (
        <div key={index} className={style.content_menu}>
          <img src={item.imagen} alt={item.nombre} />
          <span className={style.category}>{`#${item.categoria.español}`}</span>
          <div className={style.container_title}>
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
