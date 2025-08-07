import styles from './DronesCard.module.css'

function DronesCard( {name ,id, spmax, kmcarga, battery, handleChange, deliveries }){
    return(
        <div className = {styles.drone_card}>
            <h4>{name}</h4>
            <p>
                <span>Suporte Máximo : {spmax} </span>
            </p>
            <p>
                <span>Quilômetro por Carga: {kmcarga} </span>
            </p>
            <p>
                <span>Bateria : {battery} </span>
            </p>
            <p>
                <span>Entregas Realizdas : {deliveries} </span>
            </p>
            <div className = {styles.drone_card_actions}>
                <button onClick ={handleChange}>Carregar</button>
            </div>
        </div>
    )
}
export default DronesCard;