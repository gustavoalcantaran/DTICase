import styles from './RoutesCard.module.css'
import {useState} from 'react'

function RoutesCard({droneName, orderName, handleChange,status }){
    return(<div className = {styles.routes_card}>
        <h4>{orderName}</h4>
        <p>
            <span>Drone Alocado : {droneName}</span>
        </p>
        <div className = {styles.routes_card_actions} >
            <button onClick = {handleChange}>Concluir pedido</button>
        </div>
    </div>)
}
export default RoutesCard