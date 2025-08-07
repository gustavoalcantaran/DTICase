import styles from './OrdersForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import {useEffect, useState} from 'react';
import Message from '../layout/Message';

function OrdersForm({btnText , handleSubmit , orderData}){
    const [priorities, setPriorities] = useState([]);
    const [order, setOrder] = useState(orderData || {});
    const [message,setMessage] = useState('');
    const [type,setType] = useState('');

    useEffect(() => {    
        fetch("http://localhost:5000/prioridades",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((resp => resp.json()))
    .then((data) => {
        setPriorities(data);
    })
    .catch((err) => console.log(err));
    }, []);

    const submit = (e) =>
    {
        e.preventDefault();
        setMessage('');
        if (!order.locx || !order.locy || order.locx <= 0 || order.locy <= 0){
            setTimeout(() => {
            setMessage('Localização inválida');
            setType('error');
            }, 0);
            return false
        }
        if (order.locx > 100 || order.locy > 100){
            setTimeout(() => {
            setMessage('Área fora do range');
            setType('error');
            }, 0);
            return false
        }
        if (!order.prioridade || order.prioridade.name === 'Escolha uma opção' ){
            setTimeout(() => {
            setMessage('Escolha uma prioridade');
            setType('error');
            }, 0);
            return false
        }
        const updatedOrder = {...order, status : "Em espera"}
        handleSubmit(updatedOrder);
    }

    function handleChange(e){
        setOrder({...order,[e.target.name]:e.target.value})
    }
    function handleSelect(e){
        setOrder({...order, prioridade : {
            id : e.target.value,
            name : e.target.options[e.target.selectedIndex].text
        },})
    }

    return(
    <form onSubmit = {submit} className = {styles.form}>
        {message && <Message msg = {message} type = {type}/>}
        <Input type ="text" text = "Nome do Pedido" name ="name" placeholder="Insira o nome do pedido" handleOnChange={handleChange} value = {order.name ? order.name : ''}/>
        <Input type ="number" text = "Peso" name ="peso" placeholder="Insira o peso do pedido" handleOnChange={handleChange} value = {order.peso ? order.peso : ''}/>
        <Input type ="number" text = "Localização X" name ="locx" placeholder="Insira o localização X do destino" handleOnChange={handleChange} value = {order.locx ? order.locx : ''}/>
        <Input type ="number" text = "Localização Y" name ="locy" placeholder="Insira o localização Y do destino" handleOnChange={handleChange} value = {order.locy ? order.locy : ''}/>
        <Select name="prioridade" text="Selecione a prioridade" options={priorities} handleOnChange={handleSelect} value = {order.prioridade ? order.prioridade.id : ''}/>
        <SubmitButton text={btnText}/>
    </form>
    )
}
export default OrdersForm;