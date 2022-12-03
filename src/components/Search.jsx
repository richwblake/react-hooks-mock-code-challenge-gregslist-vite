import { useState } from 'react';

const Search = ({ handleSearch }) => {

    // Define state variable to control search form.
    const [inputData, setInputData] = useState("");

    // Function invoked when the form is submitted. Prevent default submission behavior and call handleSearch
    // passed down from the App component.
    const handleSubmit = e => {
        e.preventDefault();
        handleSearch(inputData);
    };

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <input
                type="text"
                id="search"
                placeholder="search free stuff"
                value={inputData}
                onChange={e => setInputData(e.target.value)}
            />
            <button type="submit">🔍</button>
        </form>
    );
};

export default Search;
