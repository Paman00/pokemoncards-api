const Search = ({ search, onChangeSearch, onSearch }) => {
    return (
        <>
            <input
                className={s.input}
                value={search}
                onChange={(event) => onChangeSearch(event.target.value)}
                placeholder="Search"
                onKeyUp={onSearch}
            />
            <button type="button" onClick={onSearch}>
                Search
            </button>
        </>
    );
}

export { Search };