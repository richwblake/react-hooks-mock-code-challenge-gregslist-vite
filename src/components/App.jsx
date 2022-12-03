import { useState, useEffect } from 'react';
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const App = () => {

    // API endpoint listed in the README
    const API = 'http://localhost:6001';

    // We create a state variable called listings to hold all of our gregslist listings. This variable can't go in 
    // either Header or ListingsContainer, as they both need access to this state. Therefore, it is declared in
    // their parent component, App.
    const [listings, setListings] = useState([]);

    // Define the search term state variable here, as it will affect the listings state
    const [search, setSearch] = useState("");

    // On page load (specified by the empty depedency array), we fetch all listings from the /listings endpoint
    // from our API. We then store the array of item objects in our state variable, listings, with the setter function
    useEffect(() => {
        fetch(API + '/listings')
            .then(res => res.json())
            .then(listings => setListings(listings));
    }, []);

    // To avoid having to pass both listings and setListings as props to Header (Beacuse search needs to affect
    // our listings state), we can write a function and pass it instead, which will handle bringing the search
    // query into the scope of this component
    const handleSearch = searchTerm => {
        setSearch(searchTerm);
    };

    const filterListings = () => {
        // Filter out listings based on whether or not their description includes the search term. This
        // function executes whenever the search state variable is updated, which in turn gives a new updated
        // array to ListingsContainer as the listings prop
        return listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()));
    };

    return (
        <div className="app">
            <Header handleSearch={handleSearch} />
            <ListingsContainer API={API} listings={filterListings()} setListings={setListings} />
        </div>
    );
};

export default App;
