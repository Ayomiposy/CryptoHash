const SearchInput = ({ search, setSearch }) => {
  return (
    <div className="filter">
      <input
        type="text"
        value={search}
        placeholder="Filter coins by name or symbol"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchInput;
