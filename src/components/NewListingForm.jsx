import { useState } from 'react';

const NewListingForm = ({ postListing }) => {

    // We'll control the create listing form with a state variable. To see a
    // longer explanation about this, please see the controlled form from 
    // the Plantsy example.
    const [formData, setFormData] = useState({
        description: "",
        image: "",
        location: "",
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // This function handle the submission event from the form. We'll use 
    // formData as our new listing to send to the App component via the 
    // callback prop, postListing.
    const handleSubmit = e => {
        e.preventDefault();
        postListing(formData);

        // reset the form to empty inputs, ready for next new listing.
        setFormData({
            description: "",
            image: "",
            location: "",
        });
    };

    // the {" "} allows us to add spacing between the input elements
    // purely for formatting, and is not required. 
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Description:
                {" "}
                <input onChange={handleChange} value={formData.description} type="text" name="description" />
            </label>
            {" "}
            <label>
                Location:
                {" "}
                <input onChange={handleChange} value={formData.location} type="text" name="location" />
            </label>
            {" "}
            <label>
                Image:
                {" "}
                <input onChange={handleChange} value={formData.image} type="text" name="image" />
            </label>
            {" "}
            <input type="submit" value="Create listing" />
        </form>
    );
};

export default NewListingForm;
