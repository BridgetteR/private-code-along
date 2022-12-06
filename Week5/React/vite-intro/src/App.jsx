import "./App.css";
import Header from "./components/Header/Header";
import CardList from "./containers/CardList/CardList";

// In react we have containers and components

// presentational components - their role is only to display things to the user, they don't hold logic or state

// state - a set of variables that specify what your application looks like at the specified time

// containers components, smart components - they hold the state of the application, some js logic, and render the containers to the page

// JSX - JavaScript XML

// What you should know:
// What are presentational components?
// What are container components?
// What is jsx?
// How to get things to be displayed on the page
// A bit about the virtual DOM

const App = () => {
    return (
        <div className="App">
            {/* delete everything between the div tags, to be able to have a clean start */}
            <Header />
            <CardList />
        </div>
    );
};

export default App;
