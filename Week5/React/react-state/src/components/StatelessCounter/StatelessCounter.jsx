const StatelessCounter = () => {
    let count = 0;

    const handleClick = () => {
        console.log(count);
        count += 1;
    };

    return (
        <div>
            <h3>Stateless Counter</h3>
            <button onClick={handleClick}>Count is {count}</button>
        </div>
    );
};

export default StatelessCounter;
