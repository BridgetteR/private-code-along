import { useContext } from "react";
import { DarkThemeContext } from "../../context/DarkModeContext";
import styles from "./Button.module.scss";

const Button = () => {
    const { darkMode, setDarkMode, toggleDarkMode } =
        useContext(DarkThemeContext);

    console.log(darkMode, "coming from the btn");

    // I want to change the style of my btn

    const classes = !darkMode ? styles.Button : styles.Button_Dark;

    // I want to change the value of my darkMode state when I click on the button

    return (
        <button className={classes} onClick={toggleDarkMode}>
            Change Mode
        </button>
    );
};

export default Button;
