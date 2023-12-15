import style from "./Navbar.module.css"

function Navbar({pathname}){

    return(
        <nav className={pathname === "/menu" ? style.navbar_main_menu : style.navbar_main}>
            <h1>Navbar</h1>
        </nav>
    )
}

export default Navbar