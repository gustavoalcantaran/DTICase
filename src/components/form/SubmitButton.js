import styles from './SubmitButton.module.css';

function SubmitButton({ text }) {
    return (
        <div>
            <button className = {styles.button} type ="submit">{text}</button>
        </div>
    )
}
export default SubmitButton;