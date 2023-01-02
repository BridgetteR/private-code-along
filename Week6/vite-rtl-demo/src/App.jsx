import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
    const [count, setCount] = useState(0);

    const submitFunction = (value) => {
        console.log("Our search value was ", value);
    };

    return (
        <div className="App">
            <SearchBar
                placeholderText={"Search..."}
                onSubmit={submitFunction}
            />
        </div>
    );
}

export default App;
