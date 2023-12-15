import style from "./Menu.module.css";
import { menus } from "../../data/dataProvisoria";
import Card from "../Card/Card";
function Menu() {
  return (
    <div className={style.menu_main}>
      {menus.map((item, index) => (
        <div key={index} className={style.content_menu} style={{backgroundImage: `url(${item.imagen})`}}>
          <span className={style.category}>{`$${item.precio === null ? "10000" : item.precio},00`}</span>
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
