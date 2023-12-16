import style from "./Card.module.css"

function Card ({nombre, categoria, ingredientes, precio, tiempoElaboracion}) {
    return (
        <div className={style.card_main}>
            <section className={style.content_title}>
            <h3>{`$${precio},0`}</h3>
            </section>
        </div>
    )

}

export default Card