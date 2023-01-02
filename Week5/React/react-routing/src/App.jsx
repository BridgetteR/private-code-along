import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Nav from "./components/Nav/Nav";
import CharList from "./containers/CharList/CharList";
import HomePage from "./containers/HomePage/HomePage";
import CharPage from "./containers/CharPage/CharPage";
import PageWrapper from "./containers/PageWrapper/PageWrapper";

const App = () => {
    // How do we pass data down from parent to child? - we use props

    // state
    const [characters, setCharacters] = useState([]);

    // useEffect
    // onMount

    const getCharacters = async () => {
        const nums = [1, 2, 3, 4];

        // array of promises
        const promises = nums.map((num) => {
            return fetch(
                `https://rickandmortyapi.com/api/character/?page=${num}`
            );
        });

        const responses = await Promise.all(promises);
        const jsonPromises = await responses.map((el) => el.json());
        const jsonResponses = await Promise.all(jsonPromises);

        const finalData = await jsonResponses
            .map((r) => {
                return r.results;
            })
            .flat();

        // console.log(finalData);

        setCharacters(finalData);
    };

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <div className={styles.App}>
            {/* Children Props */}
            {/* <PageWrapper>
                <h1>React Children Props</h1>
                <p>Some paragraph here</p>
            </PageWrapper> */}
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/characters"
                        element={<CharList characters={characters} />}
                    />
                    <Route
                        path="/characters/:id"
                        element={<CharPage characters={characters} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
