import ListingCard from "./ListingCard";

const ListingsContainer = ({ API, listings, setListings }) => {

    // This function is passed as a prop to each ListingCard during the map expression. It is used to handle
    // when the user clicks the trashcan icon on any given ListingCard. It calls the function that sends
    // the DELETE request to the server
    const handleTrashCanClick = listing => {
        console.log("Listing to delete....", listing);

        // Create config object to instruct fetch how to process a DELETE request
        const config = { method: "DELETE" };

        // Create variable to store the API endpoint that corresponds with the listing that was just clicked by
        // the user
        const endpoint = API + `/listings/${listing.id}`;

        // Send the DELETE request to the endpoint that corresponds with the argument listing's id
        fetch(endpoint, config)
            .then(res => {
                // Only if the response is OK, we go through our listings state variable, and remove the one
                // we just delete from the database.
                filterOutDeletedListing(listing.id);
            });
    };

    // This function is called when the DELETE request is succesful (line 22), and we need to update our listings
    // state to match
    const filterOutDeletedListing = id => {
        console.log(`Removing listing with id ${id} from listings state array`);

        setListings(listings.filter(listing => parseInt(listing.id, 10) !== parseInt(id, 10)));
    };

    // The function maps over our JSON listings, and creates ListingCard components from each JSON listings
    // in our listings prop. It returns the array of ListingCards, which we'll use on line 11 by invoking 
    // the function. A key prop is needed when creating an array of components using map.
    const renderListingCards = () => {
        return listings.map(listing => <ListingCard key={listing.id} handleTrashCanClick={handleTrashCanClick} listing={listing} />);
    };

    return (
        <main>
            <ul className="cards">
                {renderListingCards()}
            </ul>
        </main>
    );
};

export default ListingsContainer;
