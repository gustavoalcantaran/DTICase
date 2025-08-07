import Linkbutton from '../layout/Linkbutton';
import Message from '../layout/Message';
import Container from '../layout/Container';
import Loading from '../layout/Loading'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Orders.module.css';
import OrdersCard from '../orders/OrdersCard';
import { getOrders, deleteOrder } from '../services/OrdersService';

function Pedidos() {

    const location = useLocation();
    const [orders,setOrders] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [orderMessage, setOrderMessage] = useState('');

    let message = '';

    if (location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        getOrders()
        .then((data) => {
        setOrders(data);
        setRemoveLoading(true);
    }).catch((err) => console.log(err));
    },[]);

    function removeOrder(id){
        deleteOrder(id)
        .then(() => {
            setOrders(orders.filter((pedido) => pedido.id !== id))
            setOrderMessage('Pedido removido com sucesso!')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.orders_container}>
            <div className = {styles.tittle_container}>
                <h1>Pedidos existentes</h1>
                <Linkbutton to="/NovoPedido" text="Criar Pedido"/>
            </div>
            {message && <Message msg={message} type="success" />}
            {orderMessage && <Message msg={orderMessage} type="success" />}
            <Container customClass ="start">
                {orders.length > 0 &&
                orders.map((pedido) => <OrdersCard
                key = {pedido.id} 
                name = {pedido.name} 
                id = {pedido.id} 
                peso = {pedido.peso} 
                locx = {pedido.locx} 
                locy = {pedido.locy} 
                prioridade = {pedido.prioridade} 
                status = {pedido.status} 
                handleRemove={removeOrder}
                />
                )}
                {!removeLoading && <Loading />}
                {removeLoading && orders.length === 0 && (
                    <p>Não há pedidos cadastrados!</p>
                )}
            </Container>
        </div>
    );
}
export default Pedidos;