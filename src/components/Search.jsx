const Search = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Here's the submission event:\n", e);
    };

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <input
                type="text"
                id="search"
                placeholder="search free stuff"
                value={""}
                onChange={(e) => console.log(e.target.value)}
            />
            <button type="submit">🔍</button>
        </form>
    );
};

export default Search;
