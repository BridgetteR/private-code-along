import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Nav from "./components/Nav/Nav";
import NewMovieForm from "./components/NewMovieForm/NewMovieForm";
import MovieList from "./containers/MovieList/MovieList";
import MoviePage from "./containers/MoviePage/MoviePage";
import { getAllMovies } from "./services/movies";

// 1. What is a database?
// collection of data, csv file
// place where we store information

// 2. Why do we need databases?
// Persistant storage
// When we refresh/reload our app, the data doesn't go missing, doesn't go back to it's initial state even though we made changes
// when the servers go down, our data is safe, we don't lose it

// centralized data
// everyone can access the same up to date data, someone bought a product, the database updated with the available quantity, we don't have a situation where someone tries to buy more products than in stock

// 3. What types of databases do we have?
// sql - relational databases, data is stored in tables, each table represents an entity, so a "thing", for example a movie, a user, a rating, the tables have relationships, we use foreign keys to define those relationships, we do not repeat data, the relationships are pre-defined, we need a language to get the data we are after, structured query language (SQL)
// noSql -
// document databases:
// collections
// collections made up of documents
// each document represents a "thing", like a movie
// we don't need a special language to query through our language data
// each document is a json-like object
// it might be quicker for devs to access the data they are after with document databases

// we will be using Firestore
// Firestore is a part of FIREBASE

// FIREBASE
// set of out of the box tools for development, one of the tools is our document database called Firestore
// other firebase tools include
// - authentication tools
// - storage solutions, like a place to store images
// - tools for app deployment
// - document database - FIRESTORE

// 4. What is CRUD?
// all the different actions we can perform on our data
// C - Create - create new movies
// R - Read - get an array of movie objects
// U - Update - update some movie property, like amountWatched
// D - Delete - delete an entry from our database

// HTTP Methods
// Get - read
// Patch - update
// POST - create
// DELETE - delete

function App() {
    // call the getData function when my page mounts

    // useEffect with an empty watchlist

    const [movies, setMovies] = useState([]);

    const [added, setAdded] = useState(0);

    useEffect(() => {
        const wrapper = async () => {
            const allMovies = await getAllMovies();
            setMovies(allMovies);
        };

        wrapper();
    }, [added]);
    return (
        <BrowserRouter>
            <div className={styles.App}>
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <h1>FireStore</h1>
                                <MovieList
                                    movies={movies}
                                    added={added}
                                    setAdded={setAdded}
                                />
                            </div>
                        }
                    />

                    <Route
                        path="/new-movie"
                        element={
                            <NewMovieForm added={added} setAdded={setAdded} />
                        }
                    />

                    <Route path="/movie/:id" element={<MoviePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
