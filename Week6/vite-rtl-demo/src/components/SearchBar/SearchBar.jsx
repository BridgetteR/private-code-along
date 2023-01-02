// Maybe we want a search bar that is a bit more dynamic
// it should do different things depending on where we put it
// to achieve that we should keep external logic out of the component as much as possible
// passing in a function as a prop is a great way to do this

import { useState } from "react";

const SearchBar = ({ placeholderText, onSubmit }) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(search);
        setSearch("");
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={placeholderText}
                value={search}
                onChange={handleSearchChange}
            />
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchBar;
