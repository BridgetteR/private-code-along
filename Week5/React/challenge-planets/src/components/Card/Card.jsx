import styles from "./Card.module.scss";

const Card = ({ image, name, diameter, distance, moons, length }) => {
    const classes =
        moons === 0
            ? [styles.Card__body, styles.Card__bodyGrey]
            : [styles.Card__body];

    return (
        <div className={styles.Card}>
            <div className={styles.Card__head}>
                <img src={image} width="100"></img>
                <h3>{name}</h3>
            </div>

            <div className={classes.join(" ")}>
                <p>{diameter}</p>
                <p>{distance}</p>
                <p>{moons}</p>
                <p>{length}</p>
            </div>
        </div>
    );
};

export default Card;
