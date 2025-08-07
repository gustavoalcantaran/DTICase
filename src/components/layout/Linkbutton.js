import { Link } from 'react-router-dom';
import styles from './Linkbutton.module.css';
function Linkbutton( {to, text}){
    return(
        <Link className = {styles.button} to = {to}>
            {text}
        </Link>
    )
}
export default Linkbutton;