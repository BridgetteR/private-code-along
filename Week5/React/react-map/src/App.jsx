import styles from "./App.module.scss";
import CardList from "./containers/CardList/CardList";

function App() {
    const studentData = [
        { name: "Jyoti", city: "Sydney" },
        { name: "Margarita", city: "Melbourne" },
        { name: "Bridgette", city: "Townsville" },
        { name: "Tomo", city: "Sydney" },
        { name: "Joanne", city: "Melbourne" },
        { name: "Alex", city: "Sydney" },
        { name: "Param", city: "Melbourne" },
        { name: "Ayush", city: "Sydney" },
    ];

    return (
        <div className={styles.App}>
            <h2>React Map</h2>
            <CardList students={studentData} />
        </div>
    );
}

export default App;
