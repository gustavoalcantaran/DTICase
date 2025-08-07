import styles from './Order.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import OrdersForm from '../orders/OrdersForm'
import Message from '../layout/Message'
import {getOrder, getOrderId,updateOrder} from '../services/OrdersService'


function Pedido(){
    const{id} = useParams()

    const[order, setOrder] = useState([])
    const[showOrderForm, setShowOrderForm] = useState(false)
    const[message, setMessage] = useState()
    const[type, setType] = useState()

    useEffect(() => {
        getOrderId(id)
        .then((data) => {
        setOrder(data);
        }).catch(err => console.log) }, [id])
    
        function toggleOrderForm(){
        setShowOrderForm(!showOrderForm)
    }

    function editPost(order){
        setMessage('')
        if (!order.locx || !order.locy || order.locx <= 0 || order.locy <= 0){
            setMessage('Localização inválida')
            setType('error')
            return false
        }
        updateOrder(order)
        .then((data) => {
            setOrder(data)
            setShowOrderForm(false)
            setMessage('Pedido alterado com Sucesso')
            setType('success')
        })
        .catch(err => console.log(err))
    }

    return (
        <>
        {order.name?(
            <div className= {styles.order_details}>
                <Container customClass ="column">
                    {message && <Message type = {type} msg = {message} />}
                    <div className={styles.details_container}>
                        <h1>Pedido : {order.name}</h1>
                        <button className ={styles.button} onClick = {toggleOrderForm}>{!showOrderForm ? 'Editar Pedido' : 'Fechar'}</button>
                        {!showOrderForm ?(
                            <div className = {styles.orderInfo}>
                                <p>
                                    <span>Peso: </span> {order.peso}
                                </p>
                                <p>
                                    <span>Localização (X,Y) : </span>{order.locx},{order.locy}
                                </p>
                                <p>
                                    <span>Prioridade: </span> {order.prioridade.name}
                                </p>
                                <p>
                                    <span>Status: </span> {order.status}
                                </p>
                            </div>
                        ) : (
                            <div className = {styles.orderInfo}>
                                <OrdersForm handleSubmit ={editPost} btnText="Concluir Edição" orderData ={order}/>
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        ) : (
            <Loading/>
            )
        }
        </>
    )
}
export default Pedido
