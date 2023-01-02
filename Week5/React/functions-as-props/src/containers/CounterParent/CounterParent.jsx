import Counter from "../../components/Counter/Counter";

const CounterParent = () => {
    const increment = () => {
        console.log("Increment function was called");
    };

    const decrement = () => {
        console.log("Decrement function was called");
    };

    return (
        <div>
            <Counter handleIncrement={increment} handleDecrement={decrement} />
        </div>
    );
};

export default CounterParent;
