import { useState, useEffect } from 'react';
import styles from './Drones.module.css'
import Container from '../layout/Container'
import DronesCard from '../drones/DronesCard'
import Linkbutton from '../layout/Linkbutton'
import Loading from '../layout/Loading'
import Message from '../layout/Loading'

function Drones(){

    const [drones_data,setDrones_data] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [message, setMessage] = useState('')

    function recharge(drone){
        const droneRecarregado = {
            ...drone,
            battery: "100",
            busy : false,
        }
        fetch(`http://localhost:5000/drones/${drone.id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(droneRecarregado),
        })
        .then((res) => res.json())
        .then((data) => {
        console.log("Drone recarregado:", data);
        setDrones_data((prev) =>
        prev.map((d) => (d.id === drone.id ? droneRecarregado : d))
        );
        })
        .catch((err) => console.error(err));
    }
    useEffect(() => {
        fetch('http://localhost:5000/drones',{
            method: 'GET',
            headers : {
                'Content-Type' : 'application/json',
            },
        }).then((resp => resp.json()))
        .then((data) => {
            setDrones_data(data);
            setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    },[drones_data,message]);
    
    return (
        <div className = {styles.drones_container}>
            <div className = {styles.tittle_container}>
                <h1>Drones Disponíveis</h1>
                <Linkbutton to="/RotaDrone" text = "Calcular Melhor Rota"/>
            </div>
                    <Container customClass = "start">
                    {drones_data.length > 0 && 
                    drones_data.map((drone) =>
                        <DronesCard
                        key = {drone.id}
                        name = {drone.name}
                        id = {drone.id}
                        spmax = {drone.spmax}
                        kmcarga = {drone.kmcarga}
                        battery = {drone.battery}
                        deliveries = {drone.deliveries}
                        handleChange={()=> recharge(drone)}
                        />
                    )}
                    {!removeLoading && <Loading/>}
                </Container>
        </div>
    );
}
export default Drones;