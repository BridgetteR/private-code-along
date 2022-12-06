import styles from "./Card.module.scss";
import PropTypes from "prop-types";

const Card = ({
    title = "Default card title",
    desc = "Default card description",
    number,
}) => {
    let numberCheck =
        number !== undefined
            ? `The number is ${number}`
            : "No number was provided";

    return (
        <div className={styles.Card}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>{numberCheck}</p>
        </div>
    );
};

/*
    prop-types - defining the required types for each prop
    extra layer of security
    a way to communicate with other devs
*/

Card.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number,
    desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

// default prop values

Card.defaultProps = {
    title: "Default Card Title",
    desc: "THIS IS MY DEFAULT DESCRIPTION",
};

export default Card;

// rafce

// const Card = (props) => {
//     return (
//         <div className={styles.Card}>
//             <h3>{props.title}</h3>
//             <p>{props.desc}</p>
//         </div>
//     );
// };
