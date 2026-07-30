const SortInput = ({ sortBy, setSortBy }) => {
  return (
    <div className="controls">
      <label htmlFor="sort">Sort By:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="market_cap_desc">Market Cap (high to low)</option>
        <option value="market_cap_asc">Market Cap (low to high)</option>
        <option value="price_desc">Price (high to low)</option>
        <option value="price_asc">Price (low to high)</option>
        <option value="change_desc">24h Change (high to low)</option>
        <option value="change_asc">24h Change (low to high)</option>
      </select>
    </div>
  );
};

export default SortInput;
