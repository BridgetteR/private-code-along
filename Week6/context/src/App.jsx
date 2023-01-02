import styles from "./App.module.scss";
import { useState } from "react";
import TaskCard from "./components/TaskCard/TaskCard";
import Header from "./components/Header/Header";
import DarkThemeProvider from "./context/DarkModeContext";

const App = () => {
    const taskData = [
        { task: "Clean the bathroom", priority: "low" },
        { task: "Walk the dog", priority: "high" },
        { task: "Do codewars", priority: "very high" },
        { task: "Cook dinner", priority: "medium" },
    ];

    const [tasks, setTasks] = useState(taskData);

    return (
        <DarkThemeProvider>
            <div className={styles.App}>
                <h2>Deleting Tasks Challenge</h2>

                {tasks &&
                    tasks.map((task, i) => {
                        return (
                            <TaskCard
                                key={i}
                                task={task}
                                tasksArr={tasks}
                                setTasks={setTasks}
                            />
                        );
                    })}

                <Header />
            </div>
        </DarkThemeProvider>
    );
};

export default App;
