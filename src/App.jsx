import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/homepage";
import { AboutPage } from "./pages/aboutPage";
import { Header } from "./components/header";
import { NotFound } from "./pages/notFound";
import { CoinDetailPage } from "./pages/coinDetails";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("market_cap_desc");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          `${API_URL}&per_page=${limit}&page=1&sparkline=false`,
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        setError(error);
        console.log("Error message", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, [limit]);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              coins={coins}
              error={error}
              loading={loading}
              limit={limit}
              setLimit={setLimit}
              search={search}
              setSearch={setSearch}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coin/:id" element={<CoinDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
