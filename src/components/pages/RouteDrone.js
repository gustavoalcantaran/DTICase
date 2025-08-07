import styles from './RouteDrone.module.css'
import { useState,useEffect } from 'react'
import RoutesCard from '../routesDrones/RoutesCard'
import Container from '../layout/Container'
import {getDrones, updateDrones} from '../services/DronesService'
import { getOrders, updateOrder } from '../services/OrdersService'

function RouteDrone(){
    const [drones,setDrones] = useState([])
    const [orders,setOrders] = useState([])

    function distance(x, y) {
        return Math.sqrt(x * x + y * y) * 2;
    }

    function priorityValue(p) {
        if (p === "Alta") return 3;
        if (p === "Média") return 2;
        return 1;
    }
    function alocPedido(Pedido) {
        Pedido = {...Pedido, status: "Alocado"}
        atualizarPedido(Pedido)
        }  
    function concluirPedido(Pedido, Drone) {
        const EntregasReal = Number(Drone.deliveries) + 1;
        Pedido = {...Pedido, status: "Concluído"}
        atualizarPedido(Pedido)
        atualizarDrone({ ...Drone, busy: false, deliveries: `${EntregasReal}` })
        }
    function atualizarDrone(Drone){
        updateDrones(Drone)
        .then(data => {
            console.log(data)
            getDrones()
        .then((data) => {
            setDrones(data);
        }).catch((err) => console.log(err));})
        .catch((err) => console.log(err))
    }
    function atualizarPedido(alocacao){
            updateOrder(alocacao)
            .then((data) =>{
            console.log(data)
            getOrders()
            .then((data) => {
            setOrders(data);
        }).catch((err) => console.log(err));
        }).catch((err) => console.log(err));
    }
    function filterOrder(orders){
        const result = orders.filter((order) =>
            order.status === "Alocado"
        )
        return result
    }
    function orderAllocation(orders, drones) {
        const ordersFilter = orders.filter(order => order.status === "Em espera");

        const ordersSorted = [...ordersFilter].sort(
            (a, b) => priorityValue(b.prioridade.name) - priorityValue(a.prioridade.name)
        );


        for (const pedido of ordersSorted) {
            const peso = Number(pedido.peso);
            const x = Number(pedido.locx);
            const y = Number(pedido.locy);
            const dist = distance(x, y);

            const indexDrone = drones.findIndex(drone => {
            const capacidade = Number(drone.spmax);
            const alcance = Number(drone.kmcarga);
            const bateria = Number(drone.battery);
            return !drone.busy && peso <= capacidade && dist <= alcance && (dist * 0.5) <= bateria;
            });

            if (indexDrone !== -1) {
            const drone = drones[indexDrone];
            const consumo = (dist*0.5);
            let novaBateria = Number(drone.battery) - consumo;
            const novoDrones = drones.map((d, i) =>
                i === indexDrone ? { ...d, battery: `${novaBateria}`, busy: true } : d
            );
            console.log(novoDrones);
            atualizarDrone({ ...drone, battery: `${novaBateria}`, busy: true });
            setDrones(novoDrones);
            drones = novoDrones;

            const pedidoAtualizado = {
                ...pedido,
                status: "Alocado",
                drone : novoDrones[indexDrone],
            };
            alocPedido(pedidoAtualizado);
            }
        }
    }

    useEffect(() =>{
        getDrones()
        .then((data) => {
            setDrones(data);
        }).catch((err) => console.log(err));
    },[]);
    useEffect(() =>{
        getOrders()
        .then((data) => {
            setOrders(data);
        }).catch((err) => console.log(err));
    },[]);
    const resultado = filterOrder(orders);

    orderAllocation(orders,drones);

    return(<>
    <div className = {styles.routes_container}>
        <div className = {styles.tittle_container}>
            <h1>Pedidos Alocados</h1>
        </div>
    <Container customClass ="start">{resultado.map((alocation)=>
        <RoutesCard 
        droneName = {alocation.drone.name} 
        orderName = {alocation.name} 
        status = {alocation.status} 
        handleChange = {() => concluirPedido(alocation,alocation.drone)}/>
    )}</Container></div></>)
}
export default RouteDrone;