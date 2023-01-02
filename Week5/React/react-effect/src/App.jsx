import styles from "./App.module.scss";
import SimpleExamples from "./components/SimpleExamples/SimpleExamples";
import CleanUpParent from "./containers/CleanUpParent/CleanUpParent";

// useEffect is another React hook that allows us to add extra functionality to our project

// component's lifecycle - every component has it's own lifecycle: initialisation, mounting, updating, unmounting

// useEffect allows us to add extra functionality to the lifecycle stages of our component or the whole application

const App = () => {
    return (
        <div className={styles.App}>
            <h2>React useEffect</h2>
            {/* <SimpleExamples /> */}
            <CleanUpParent />
        </div>
    );
};

export default App;
