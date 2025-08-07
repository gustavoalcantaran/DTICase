import styles from './Footer.module.css'

function Footer(){
    return(<footer className = {styles.footer}>
        <p className = {styles.copy_rigth}><span>Sistema de Drones</span> &copy; 2025</p>
    </footer>)
}
export default Footer;