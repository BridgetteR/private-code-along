import { useContext } from "react";
import { DarkThemeContext } from "../../context/DarkModeContext";
import Heading from "../Heading/Heading";
import styles from "./Header.module.scss";

const Header = () => {
    const { darkMode } = useContext(DarkThemeContext);

    const classes = !darkMode ? styles.Header : styles.Header_Dark;
    return (
        <div className={classes}>
            <Heading />
        </div>
    );
};

export default Header;
