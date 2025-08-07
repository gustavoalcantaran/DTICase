import styles from './OrdersCard.module.css';
import {Link} from 'react-router-dom';
import { BsPencil, BsFillTrashFill} from 'react-icons/bs';

function PedidosCard({id , name , peso , locx , locy, prioridade, status, handleRemove}) {
    
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <div className = {styles.order_card}>
            <h4>{name}</h4>
            <p>
                <span>Peso : {peso}</span>
            </p>
            <p>
                <span>Prioridade : {prioridade.name}</span>
            </p>
            <p>
                <span>Localização (X,Y): {locx},{locy}</span>
            </p>
            <p>
                <span>Status: {status}</span>
            </p>
            <div className = {styles.order_card_actions}>
                <Link to = {`/Pedido/${id}`}>
                    <BsPencil />Editar
                </Link>
                <button onClick = {remove}>
                    <BsFillTrashFill />Excluir
                </button>
            </div>
        </div>
    )
}
export default PedidosCard;