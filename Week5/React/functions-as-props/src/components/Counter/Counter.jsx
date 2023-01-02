const Counter = ({ handleIncrement, handleDecrement }) => {
    return (
        <div>
            <button onClick={handleIncrement}>Increment Function</button>
            <button onClick={handleDecrement}>Decrement Function</button>
        </div>
    );
};

export default Counter;
