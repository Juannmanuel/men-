import style from "./Navbar.module.css";

function Navbar({ pathname }) {
  return (
    <nav
      className={
        pathname === "/menu" ? style.navbar_main_menu : style.navbar_main
      }
    >
      <div className={style.navbar_main_menu}>
        <img
          src="https://static.wixstatic.com/media/94dfda_44df25021a40444f9ecd9f360dca28ca~mv2.png/v1/fill/w_164,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/homeslice%20png.png"
          alt=""
        />
      </div>
    </nav>
  );
}

export default Navbar;
