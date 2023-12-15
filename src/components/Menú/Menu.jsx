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
        <div className={style.content_menu} style={{backgroundImage: `url(${item})`}}>
          <div className={style.descriptio_menu}>
            <h2>asdasdasda</h2>
            <h3>asdasdasda</h3>
            <h4>$400</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
