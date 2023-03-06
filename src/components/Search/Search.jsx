const Search = ({ search, onChangeSearch, onSearch }) => {
    return (
        <>
            <input
                value={search}
                onChange={(event) => onChangeSearch(event.target.value)}
                placeholder="Search"
            />
            <button type="button" onClick={onSearch}>
                Search
            </button>
        </>
    );
}

export { Search };