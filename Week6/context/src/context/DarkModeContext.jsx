// use the createContext method to set my global context

import { useState } from "react";
import { createContext } from "react";

export const DarkThemeContext = createContext();

// create a context provider component

// My components need to subscribe to that context

const DarkThemeProvider = ({ children }) => {
    // I need to set some state
    const [darkMode, setDarkMode] = useState(false);

    // create a function that will toggle the state
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const data = { darkMode, setDarkMode, toggleDarkMode };

    // every element in my App.jsx that will be nested in this DarkThemeProvider component will have access to that global state
    return (
        <DarkThemeContext.Provider value={data}>
            {children}
        </DarkThemeContext.Provider>
    );
};

export default DarkThemeProvider;
