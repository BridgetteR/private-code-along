import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./MovieList.module.scss";

const MovieList = ({ movies, added, setAdded }) => {
    return (
        <>
            <h2>Movie List</h2>
            <div className={styles.MovieList}>
                {movies &&
                    movies.map((movie) => {
                        return (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                added={added}
                                setAdded={setAdded}
                            />
                        );
                    })}
            </div>
        </>
    );
};

export default MovieList;
