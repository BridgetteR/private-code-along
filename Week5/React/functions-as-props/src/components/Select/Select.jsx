const Select = ({ options, value, selectionSetter }) => {
    const handleChange = (event) => {
        selectionSetter(event.target.value);
    };

    return (
        <div>
            <label htmlFor="cities">City: </label>
            <select id="cities" defaultValue={value} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option.data} value={option.data}>
                        {option.city}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
