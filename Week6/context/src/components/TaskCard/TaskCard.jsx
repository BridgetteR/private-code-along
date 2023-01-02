import styles from "./TaskCard.module.scss";

const TaskCard = ({ task, tasksArr, setTasks }) => {
    const handleDelete = () => {
        // filter my data, I want everything but the task I clicked on, store in an array

        const filteredTasks = tasksArr.filter((t) => t.task !== task.task);

        // set my tasks to that new array
        setTasks(filteredTasks);
    };

    return (
        <div className={styles.TaskCard}>
            <h3>{task.task}</h3>
            <p>{task.priority}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TaskCard;
