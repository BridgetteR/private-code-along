import styles from "./HomePage.module.scss";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to my Rick and Morty API</h1>
            <p>Use it well</p>
            <img
                className={styles.Home_Img}
                src="https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg"
                alt="portrait"
            />
        </div>
    );
};

export default HomePage;
