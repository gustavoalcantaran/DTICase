import styles from './DronesCard.module.css'

function DronesCard( {name ,id, spmax, kmcarga, battery, handleChange, deliveries }){
    return(
        <div className = {styles.drone_card}>
            <h4>{name}</h4>
            <p>
                <span>Suporte Máximo : {spmax} kg</span>
            </p>
            <p>
                <span>Alcance: {kmcarga} </span>
            </p>
            <p>
                <span>Bateria : {battery} </span>
            </p>
            <p>
                <span>Entregas Realizadas : {deliveries} </span>
            </p>
            <div className = {styles.drone_card_actions}>
                <button onClick ={handleChange}>Carregar</button>
            </div>
        </div>
    )
}
export default DronesCard;