import styles from "./MovieCard.module.scss";
import { deleteMovie } from "../../services/movies";
import { NavLink } from "react-router-dom";

const MovieCard = ({ movie, added, setAdded }) => {
    const handleDelete = async () => {
        await deleteMovie(movie.id);
        setAdded(added + 1);
    };

    return (
        <div className={styles.Card}>
            <NavLink to={`/movie/${movie.id}`}>
                <h2>{movie.title}</h2>
                <p>Year Released: {movie.yearReleased}</p>
                <p>Amount Watched: {movie.amountWatched}</p>
            </NavLink>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default MovieCard;
