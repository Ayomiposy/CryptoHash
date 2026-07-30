import { Link } from "react-router";
import { CoinCard } from "../components/coinCard";
import { LimitFilter } from "../components/listLimit";
import SearchInput from "../components/searchInput";
import SortInput from "../components/sortInput";

export const HomePage = ({
  loading,
  error,
  search,
  setSearch,
  limit,
  setLimit,
  sortBy,
  setSortBy,
  coins,
}) => {
  const filteredCoins = coins
    .filter((coins) => coins.name.toLowerCase().includes(search.toLowerCase()))
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case "market_cap_desc":
          return b.market_cap - a.market_cap;

        case "market_cap_asc":
          return a.market_cap - b.market_cap;

        case "price_desc":
          return b.current_price - a.current_price;

        case "price_asc":
          return a.current_price - b.current_price;

        case "change_desc":
          return b.price_change_24h - a.price_change_24h;

        case "change_asc":
          return a.price_change_24h - b.price_change_24h;
      }
    });

  return (
    <div>
      <h1>🚀 CrytoHash</h1>
      {/* search and filter per page */}
      {loading && <p>Loading...</p>}
      {error && <div className="error">{error.message}</div>}
      <div className="top-controls">
        <SearchInput search={search} setSearch={setSearch} />
        <LimitFilter limit={limit} setLimit={setLimit} />
        <SortInput sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {!loading && !error && (
        <main className="grid">
          {filteredCoins.length === 0 ? (
            <div>There are no matching coins</div>
          ) : (
            filteredCoins.map((coin) => (
              <Link to={`/coin/${coin.id}`} key={coin.id}>
                <CoinCard coin={coin} />
              </Link>
            ))
          )}
        </main>
      )}
    </div>
  );
};
