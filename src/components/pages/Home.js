import styles from './Home.module.css';
import Drone from '../../img/drone_image.png';
import Linkbutton from '../layout/Linkbutton';

function Home(){
    return (
        <section className = {styles.home_container}>
            <h1>Bem-vindo ao <span>Sistema de Drones</span></h1>
            <p>Gerencie seus drones e pedidos de forma eficiente!</p>
            <div>
            <Linkbutton to="/Drones" text="Gerenciar Drones" />
            <Linkbutton to="/Pedidos" text="Gerenciar Pedidos" />
            </div>
            <img src={Drone} alt="Drone"/>
        </section>
    );
}
export default Home;