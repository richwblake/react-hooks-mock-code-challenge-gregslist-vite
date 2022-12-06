import { useState, useEffect } from 'react';
import Header from "./Header";
import NewListingForm from './NewListingForm';
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

    // Use state variable to store whether we should be sorting alphabetically or not.
    // We pass this as a prop to the Header component, as Header contains
    // the button we're using to change if we're sorting or not.
    const [isSorting, setIsSorting] = useState(false);

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

    // This function is passed as a callback prop to NewListingForm, so that
    // when the user submits the new listing form, we have access to that new
    // listing here as the parameter, listing.
    const postListing = listing => {
        // First, we create the config object to instruct fetch how to make
        // a post request. Then, we make sure that we update our listings
        // state variable if (and only if) the POST request is successful.
        const config = {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(listing),
        };

        fetch(API + '/listings', config)
            .then(resp => resp.json())
            .then(newListing => {
                // These .then functions only get called when the POST request
                // was successful. If not, fetch will look for a catch block
                // to execute, and will provide the error that occured as the
                // argument. Example below.
                setListings([...listings, newListing]);
            })
            .catch(err => console.log("Error occured: ", err));
    };

    const filterListings = () => {
        // First, we see if the isSorting value is true. If that's the case,
        // we should be sorting our listings alphabetically. If isSorting
        // is false, we'll skip the sort and move on to the filter. The user
        // should be able sort even when they are searching for specific items.
        let formattedArray = [];

        // This ternary expression assigns formattedArray either a copy of 
        // listings which is sorted based on their description, or just simply a copy of listings
        formattedArray = isSorting ? [...listings].sort((a, b) => a.location.localeCompare(b.location)) : [...listings];

        // Filter out listings based on whether or not their description includes the search term. This
        // function executes whenever the search state variable is updated, which in turn gives a new updated
        // array to ListingsContainer as the listings prop
        return formattedArray.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()));
    };

    return (
        <div className="app">
            <Header handleSearch={handleSearch} isSorting={isSorting} setIsSorting={setIsSorting} />
            <NewListingForm postListing={postListing} />
            <ListingsContainer API={API} listings={filterListings()} setListings={setListings} />
        </div>
    );
};

export default App;
