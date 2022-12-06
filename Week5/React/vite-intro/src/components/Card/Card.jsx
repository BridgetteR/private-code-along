// Before I add styles, I need to import the code from scss
// We will just import a styles object with certain properties
import styles from "./Card.module.scss";

const Card = () => {
    return (
        <div className={styles.card}>
            <h2>I am a Card</h2>
            <p>
                I am a presentational component being rendered by a container
                component
            </p>
        </div>
    );
};

export default Card;
