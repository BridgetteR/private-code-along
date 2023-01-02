import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import UserList from "./containers/UserList/UserList";

function App() {
    const [users, setUsers] = useState("");

    const getUsers = async () => {
        const promises = await fetch(`https://randomuser.me/api/?results=20`);
        const responses = await promises.json();
        console.log(responses.results);
        setUsers(responses.results);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UserList users={users} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
