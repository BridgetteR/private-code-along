import styles from "./Card.module.scss";

const Card = ({ studentName, city }) => {
    const classes =
        city === "Melbourne" ? [styles.Card, styles.Melb] : [styles.Card];

    const secondClass =
        city === "Townsville" ? [styles.Card, styles.Tsv] : [styles.Card];

    return (
        <div className={`${classes.join(" ")} ${secondClass.join(" ")}`}>
            <h3>{studentName}</h3>
            <p>{city}</p>
        </div>
    );
};

// Below is the normal notation if only one class
// className={classes.join(" ")}

export default Card;
