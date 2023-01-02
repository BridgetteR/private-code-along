import styles from "./App.module.scss";
import CounterParent from "./containers/CounterParent/CounterParent";
import Form from "./containers/Form/Form";

const cityOptions = [
    {
        city: "Melbourne",
        data: 101,
    },
    {
        city: "Sydney",
        data: 102,
    },
    {
        city: "Brisbane",
        data: 103,
    },
    {
        city: "Adelaide",
        data: 104,
    },
];

function App() {
    return (
        <div className={styles.App}>
            <h2>Functions as Props</h2>
            <h3>How to pass a simple function?</h3>
            <CounterParent />

            <h3>How to pass functions to handle change of state</h3>
            <Form dropDownOptions={cityOptions} />
        </div>
    );
}

export default App;
