const TextField = ({ textValue, textSetter }) => {
    const handleChange = (event) => {
        textSetter(event.target.value);
        // setTextState function
    };

    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input
                id="name"
                type="text"
                placeholder="Enter Your Name"
                value={textValue}
                onChange={handleChange}
            />
        </div>
    );
};

export default TextField;
