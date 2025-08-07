import styles from './NewOrder.module.css';
import OrdersForm from '../orders/OrdersForm';
import { useNavigate} from 'react-router-dom';
import {createOrder} from '../services/OrdersService'

function NewOrder() {

    const navigate = useNavigate();

    function createPost(order){
        createOrder(order).then((data) => {
            navigate('/pedidos', { state: { message: 'Pedido criado com sucesso!' } });
        }).catch((err) =>console.log(err));
    }

    return (
        <div className = {styles.neworder_container}>
            <h1>Criar Pedido</h1>
            <p>Crie o seu pedido</p>
            <OrdersForm handleSubmit = {createPost} btnText = "Criar Pedido" />
        </div>
    );
}
export default NewOrder;