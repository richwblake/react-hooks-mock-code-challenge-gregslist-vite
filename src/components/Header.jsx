import { useState } from 'react';
import Search from "./Search";

const Header = ({ handleSearch, isSorting, setIsSorting }) => {

    // This function is used as the onClick event callback function. When
    // then user clicks the sorting button, we change our sorting state
    // variable from its previous value to the opposite. isSorting is a 
    // boolean.
    const toggleIsSorting = () => {
        setIsSorting(!isSorting);
    };

    // Pass our handleSearch function prop from App to Search, where it will get invoked by the user submitting
    // a search query
    return (
        <header>
            <h1>
                <span className="logo" role="img">
                    ☮
                </span>
                gregslist
            </h1>
            <Search handleSearch={handleSearch} />
            {/* below search bar, we create a new button to handle alphabetically sorting by location */}
            <button onClick={toggleIsSorting}>{isSorting? "Sorting alphabetically" : "Not sorting"}</button>
        </header>
    );
};

export default Header;
