import { useEffect } from "react";
import styles from "./CleanUpCard.module.scss";

const CleanUpCard = () => {
    // The first argument of useEffect can RETURN a function. We refer to it as a cleanup function - it will take place when the component is unmounting

    useEffect(() => {
        console.log("My card has mounted");

        return () => {
            console.log("My card has unmounted");
        };
    }, []);

    return (
        <div className={styles.Card}>
            <h3>My Card</h3>
        </div>
    );
};

export default CleanUpCard;
