import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../img/drone_logo_128.png';
import Container from './Container';
function Navbar(){
    return(
        <nav className = {styles.navbar}>   
            <Container>
                <Link to ="/">
                <img src = {logo} alt="Drone Logo"/>
                </Link> 
                <ul className = {styles.list}>
                    <li className = {styles.item}>
                        <Link to ="/">Home</Link>
                    </li>
                    <li className = {styles.item}>
                         <Link to ="/pedidos">Pedidos</Link>
                    </li>
                    <li className = {styles.item}>
                        <Link to ="/drones">Drones</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}
export default Navbar;