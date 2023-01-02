import { useState } from "react";
import styles from "./DarkMode.module.scss";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

const DarkMode = () => {
    const [isDark, setIsDark] = useState(false);
    const [time, setTime] = useState(12);

    const randomTimeGen = () => {
        const n = Math.floor(Math.random() * 24);
        return n;
    };

    const handleTimeUpdate = () => {
        setTime(randomTimeGen());
    };

    const handleModeChange = () => {
        setIsDark(!isDark);
    };

    const classes = isDark
        ? [styles.DarkMode__Card, styles.DarkMode__Card__Dark]
        : [styles.DarkMode];

    return (
        <div className={styles.DarkMode}>
            <button onClick={handleTimeUpdate}>Update Time</button>
            <img src={time > 6 && time < 18 ? sun : moon} />
            <div className={classes.join(" ")}>
                <h3>My Card</h3>
                <p>The time is:</p>
                <p>&#128368;&#65039; {time}:00</p>
                <button onClick={handleModeChange}>
                    {isDark ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </div>
    );
};

export default DarkMode;
