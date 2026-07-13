import { useState, useEffect } from "react";
import { CoinCard } from "./components/coinCard";
import { LimitFilter } from "./components/listLimit";
import SearchInput from "./components/searchInput";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          `${API_URL}&per_page=${limit}&page=1&sparkline=false`,
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setCoins(data);
        console.log(data);
      } catch (error) {
        setError(error);
        console.log("Error message", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, [limit]);

  const filteredCoins = coins.filter((coins) =>
    coins.name.toLowerCase().includes(search.toLowerCase()),
  );

  console.log(search);
  return (
    <div>
      <h1>🚀 CrytoHash</h1>
      {/* search and filter per page */}
      {loading && <p>Loading...</p>}
      {error && <div className="error">{error.message}</div>}
      <div className="top-controls">
        <SearchInput search={search} setSearch={setSearch} />
        <LimitFilter limit={limit} setLimit={setLimit} />
      </div>

      {!loading && !error && (
        <main className="grid">
          {filteredCoins.length === 0 ? (
            <div>There are no matching coins</div>
          ) : (
            filteredCoins.map((coin) => <CoinCard coin={coin} key={coin.id} />)
          )}
        </main>
      )}
    </div>
  );
};

export default App;
