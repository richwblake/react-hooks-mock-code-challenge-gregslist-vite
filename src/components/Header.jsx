import Search from "./Search";

const Header = ({ handleSearch }) => {
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
        </header>
    );
};

export default Header;
