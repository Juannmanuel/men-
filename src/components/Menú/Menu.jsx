import style from "./Menu.module.css";

function Menu() {
  const titles = [
    "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
    "https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg",
    "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
    "https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg",
    "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
  ];

  return (
    <div className={style.menu_main}>
      {titles.map((item) => (
        <div className={style.content_menu}><img src={item} alt="Comida" /></div>
      ))}
    </div>
  );
}

export default Menu;
