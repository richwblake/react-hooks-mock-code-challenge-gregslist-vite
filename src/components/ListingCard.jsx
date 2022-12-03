import { useState } from 'react';

const ListingCard = ({ listing, handleTrashCanClick }) => {

    // Using destructuring, create 3 new variables that correspond with each properties value in the listing
    // object prop.
    const { description, image, location } = listing;

    // Use state variable to track whether this ListingCard has been favorited. The listing can either be 
    // favorited or not, so a good default type to assign is a Boolean
    const [isFavorited, setIsFavorited] = useState(false);

    // When this function is invoked, it reassigns isFavorited equal to its current opposite. So, if isFavorited
    // is true and this function is invoked, it will reassign isFavorite to its current opposite, false.
    const toggleIsFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    // On line 40, when the trash can icon is clicked by the user, we invoke the callback prop handleTrashCanIcon,
    // and pass as an argument the JSON listing that this ListingCard is based on. 
    return (
        <li className="card">
            <div className="image">
                <span className="price">$0</span>
                <img
                    src={image}
                    alt={description}
                />
            </div>
            <div className="details">
                {isFavorited ? (
                    // If isFavorited is true, this button (the yellow star) is rendered
                    <button onClick={toggleIsFavorite} className="emoji-button favorite active">★</button>
                ) : (
                    // Otherwise, if isFavorited is false, this empty star button is rendered. Both of these
                    // buttons invoke toggleIsFavorite when they are clicked via the onClick event listener.
                    <button onClick={toggleIsFavorite} className="emoji-button favorite">☆</button>
                )}
                <strong>{description}</strong>
                <span> · {location}</span>
                <button onClick={() => handleTrashCanClick(listing)} className="emoji-button delete">🗑</button>
            </div>
        </li>
    );
};

export default ListingCard;
