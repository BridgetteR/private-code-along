import styles from "./App.module.scss";
import StatelessCounter from "./components/StatelessCounter/StatelessCounter";
import Counter from "./components/Counter/Counter";
import DarkMode from "./components/DarkMode/DarkMode";

// What is state in React?
// State in React is a way for our application to be aware of changes that have happened
// When React detects a state change, it's going to trigger a re-render of the part of our app that has changed

function App() {
    return (
        <div className={styles.App}>
            {/* <h2>React useState</h2> */}
            {/* <StatelessCounter /> */}
            {/* <Counter initialScore={10} /> */}
            <DarkMode />
        </div>
    );
}

export default App;
