import { useState } from "react";
import styles from "./NewMovieForm.module.scss";
import { addMovie } from "../../services/movies";
import { useNavigate } from "react-router-dom";

const NewMovieForm = ({ added, setAdded }) => {
    const navigate = useNavigate();

    const initialState = {
        title: "",
        yearReleased: "",
        amountWatched: 0,
    };

    const [newMovie, setNewMovie] = useState(initialState);

    const convertType = (name, val) => {
        if (name === "yearReleased") {
            return Number(val);
        }

        return val;
    };

    const handleChange = () => {
        // event target is the input, it has a value and a name property

        const { name, value } = event.target;
        // console.log(name, value);

        setNewMovie({ ...newMovie, [name]: convertType(name, value) });
    };

    // console.log(newMovie);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addMovie(newMovie);
        setAdded(added + 1);
        console.log("added");
        // I want to go back to homepage
        navigate("/");
    };

    return (
        <form className={styles.Form} onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
                className={styles.Form_Input}
                id="title"
                name="title"
                placeholder="Title"
                type="text"
                onChange={handleChange}
            />

            <label htmlFor="yearReleased">Year Released</label>
            <input
                className={styles.Form_Input}
                id="yearReleased"
                name="yearReleased"
                placeholder="Year Released"
                type="number"
                onChange={handleChange}
            />

            <input className={styles.Form_Input} type="submit" />
        </form>
    );
};

export default NewMovieForm;
