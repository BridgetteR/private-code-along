import styles from "./App.module.scss";
import CardList from "./containers/CardList/CardList";

/*
    What are props?
    Props stands for properties

    a way to pass data from a parent component to a child component

    uni-directional flow of data - we can only pass props from the parent to the child, not the other way around

    we can have the same component but with different data rendered to it - reusability of components
*/

function App() {
    return (
        <div className={styles.App}>
            <h2>React Props</h2>
            <CardList titleFromApp="This title is coming from the app component" />
        </div>
    );
}

export default App;
