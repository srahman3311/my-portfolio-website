// Stylesheet
import styles from "./Common.module.css";

function Button({ text, style }) {

    return (
        <button className = {styles.button} style = {style}>{text}</button>
    );

}


export default Button;