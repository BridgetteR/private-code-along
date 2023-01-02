import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    getMovieById,
    updateMovieAmount,
    updateMovie,
} from "../../services/movies";
import styles from "./MoviePage.module.scss";

const MoviePage = () => {
    const { id } = useParams();

    const [movieInfo, setMovieInfo] = useState({});

    const [inc, setInc] = useState(0);

    const [newField, setNewfield] = useState({});

    useEffect(() => {
        const wrapper = async () => {
            const data = await getMovieById(id);
            console.log(data);
            setMovieInfo(data);
        };
        wrapper();
    }, [inc, id]);

    const handleClick = async () => {
        try {
            await updateMovieAmount(id);
            console.log("updated");
            setInc(inc + 1);
        } catch (e) {
            console.log(e.message);
        }
    };

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewfield({ [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateMovie(id, newField);
        setInc(inc + 1);
    };

    return (
        <div>
            <h1>{movieInfo.title}</h1>
            <p>{movieInfo.yearReleased}</p>
            <p>{movieInfo.amountWatched}</p>
            <p>
                {movieInfo.director
                    ? movieInfo.director
                    : "No Director Provided"}
            </p>
            <button onClick={handleClick}>Increment Amount Watched</button>

            <form className={styles.Form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Director"
                    name="director"
                    onChange={handleInput}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default MoviePage;
