import styles from './NewOrder.module.css';
import OrdersForm from '../orders/OrdersForm';
import { useNavigate} from 'react-router-dom';
import {createOrder} from '../services/OrdersService';
import {useState} from 'react';
import Message from '../layout/Message';

function NewOrder() {

    const navigate = useNavigate();
    const [message,setMessage] = useState('');
    const [type,setType] = useState('');

    function createPost(order){
        if (Number(order.peso)>30 || Number(order.peso)<1){
            setMessage('Peso inválido')
            setTimeout(() =>{
                setMessage('');
            },3000);
            setType('error')
            return false
        }
        if (!order.locx || !order.locy || order.locx <= 0 || order.locy <= 0){
            setMessage('Localização inválida')
            setTimeout(() =>{
                setMessage('');
            },3000);
            setType('error')
            return false
        }
        if (order.prioridade.name !== "Média" && order.prioridade.name !== "Alta" && order.prioridade.name !== "Baixa"){
            setMessage('Prioridade inválida')
            setTimeout(()=>{
                setMessage('');
            },3000);
            setType('error')
            return false
        }
        if (order)
        createOrder(order).then((data) => {
            navigate('/pedidos', { state: { message: 'Pedido criado com sucesso!' } });
        }).catch((err) =>console.log(err));
    }

    return (
        <div className = {styles.neworder_container}>
            <h1>Criar Pedido</h1>
            <p>Crie o seu pedido</p>
            <div>{message && <Message msg = {message} type = {type}/>}</div>
            <OrdersForm handleSubmit = {createPost} btnText = "Criar Pedido" />
        </div>
    );
}
export default NewOrder;