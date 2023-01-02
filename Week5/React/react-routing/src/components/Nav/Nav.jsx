import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

// There is also a Link element
// But NavLink has an extra property - isActive, which allows us to style active links - we can have extra styling for the link that we clicked/are currently on

const Nav = () => {
    // create a function that will take isActive as a parameter and use ternary to specify which classes I want for a clicked link

    const activeStyle = ({ isActive }) =>
        isActive ? `${styles.Nav_Link} ${styles.Link_Active}` : styles.Nav_Link;

    return (
        <nav>
            <NavLink className={activeStyle} to="/">
                Home
            </NavLink>
            <NavLink className={activeStyle} to="/characters">
                Characters
            </NavLink>
        </nav>
    );
};

export default Nav;
