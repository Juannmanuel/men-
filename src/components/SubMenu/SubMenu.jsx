import style from "./SubMenu.module.css";

function SubMenu() {
  return (
    <section className={style.submenu_main}>
      <div className={style.container_submenu}></div>
      <div className={style.container_submenu}></div>
      <div className={style.container_submenu}></div>
      <div className={style.container_submenu}></div>
      <div className={style.container_submenu}></div>
      <div className={style.container_submenu}></div>
    </section>
  );
}

export default SubMenu;
