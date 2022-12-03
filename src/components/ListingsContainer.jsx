import ListingCard from "./ListingCard";

const ListingsContainer = ({ listings }) => {

    // The function maps over our JSON listings, and creates ListingCard components from each JSON listings
    // in our listings prop. It returns the array of ListingCards, which we'll use on line 11 by invoking 
    // the function. A key prop is needed when creating an array of components using map.
    const renderListingCards = () => {
        return listings.map(listing => <ListingCard key={listing.id} listing={listing} />);
    }

    return (
        <main>
            <ul className="cards">
                {renderListingCards()}
            </ul>
        </main>
    );
};

export default ListingsContainer;
