import { useState } from "react";

const Counter = ({ initialScore }) => {
    // Using useState hook
    // NOT: let score = 0;

    // const [stateVariable, setStateVariable] = useState(initialValue);
    const [score, setScore] = useState(initialScore);

    const [resetCount, setResetCount] = useState(0);

    const handleIncrement = () => {
        setScore(score + 1);
    };

    const handleDecrement = () => {
        setScore(score - 1);
    };

    const handleReset = () => {
        setScore(0);
        setResetCount(resetCount + 1);
    };

    return (
        <div>
            <h3>State Counter</h3>
            <div>Score is: {score}</div>

            <button onClick={handleIncrement}>Plus 1</button>
            <button onClick={handleDecrement}>Minus 1</button>

            <div>
                <button onClick={handleReset}>Reset</button>
                <p>I have reset my score {resetCount} times</p>
            </div>
        </div>
    );
};

export default Counter;
