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

    // On page load (specified by the empty depedency array), we fetch all listings from the /listings endpoint
    // from our API. We then store the array of item objects in our state variable, listings, with the setter function
    useEffect(() => {
        fetch(API + '/listings')
            .then(res => res.json())
            .then(listings => setListings(listings));
    }, []);

    return (
        <div className="app">
            <Header />
            <ListingsContainer listings={listings} />
        </div>
    );
};

export default App;
