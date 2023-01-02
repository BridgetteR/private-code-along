import { useContext } from "react";
import { DarkThemeContext } from "../../context/DarkModeContext";
import Button from "../Button/Button";
import styles from "./Heading.module.scss";

const Heading = () => {
    const { darkMode } = useContext(DarkThemeContext);

    const classes = !darkMode ? styles.Heading : styles.Heading_Dark;

    return (
        <>
            <h1 className={classes}>Heading</h1>
            <Button />
        </>
    );
};

export default Heading;
