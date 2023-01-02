import styles from "./CharCard.module.scss";
import { NavLink } from "react-router-dom";

const CharCard = ({ data }) => {
    return (
        <NavLink to={`/characters/${data.id}`}>
            <div className={styles.CharCard}>
                <img
                    className={styles.CharCard_Img}
                    src={
                        data.image
                            ? data.image
                            : "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg"
                    }
                    alt="portrait"
                />
                <h2>{data.name}</h2>
                <p>{data.species}</p>
            </div>
        </NavLink>
    );
};

export default CharCard;
