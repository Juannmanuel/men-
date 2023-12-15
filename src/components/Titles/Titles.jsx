import { Link } from "react-router-dom"
import style from "./Titles.module.css"

function Titles({name}){
    return (
        <div className={style.main_title}>
            <Link to={"/submenu"}><h2>Titles</h2></Link>
        </div>
    )
}

export default Titles