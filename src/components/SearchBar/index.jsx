import "./styles.css";

export const SearchBar = ({ filters, handleFilter, setFilters }) => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Type something to search..."
        value={filters.search}
        onChange={(e) =>
          setFilters({
            ...filters,
            search: e.target.value,
          })
        }
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleFilter();
          }
        }}
      />
      <button className="search-button" onClick={() => handleFilter()}>
        Search
      </button>
    </div>
  );
};
