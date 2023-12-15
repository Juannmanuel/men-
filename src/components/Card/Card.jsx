import style from "./Card.module.css"

function Card ({nombre, categoria, ingredientes, precio, tiempoElaboracion}) {
    return (
        <div className={style.card_main}>
            <section className={style.content_title}>
            <h3>{`${nombre.español}`}</h3>
            <h4>{categoria.español}</h4>
            </section>
        </div>
    )

}

export default Card