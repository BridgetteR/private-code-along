const Quantity = ({ count, changeHandler }) => {
    const increment = () => {
        changeHandler(count + 1);
    };

    const decrement = () => {
        if (count !== 0) {
            changeHandler(count - 1);
        }
    };

    return (
        <div>
            <label>Number of people: </label>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Quantity;
