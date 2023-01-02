import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/new-movie">Add New Movie</NavLink>
        </nav>
    );
};

export default Nav;
