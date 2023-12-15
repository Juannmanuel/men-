import style from "./Menu.module.css"

function Menu(){
  const titles = ["Cafetería", "Bebidas", "Comida", "Menú del Día", "Menú Infantil"  ]

    return(
        <div className={style.menu_main}>
        {titles.map((item) => <div className={style.content_menu}>{item}</div>) }    
        </div>
    )
}

export default Menu