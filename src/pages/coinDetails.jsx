import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import { Spinner } from "../components/spinner";
import { CoinChart } from "../components/chartComponent";

const API_URL = import.meta.env.VITE_COIN_API_URL;

export const CoinDetailPage = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error("Failed to fetch coin details");
        const data = await res.json();
        setCoin(data);
      } catch (err) {
        setError(err);
        console.log("Failed to connect and fetch coin details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCoin();
  }, [id]);

  return (
    <div className="coin-details-container">
      <Link to="/"> ← Back Home</Link>
      <h1 className="coin-detail-title">
        {coin ? `${coin.name} (${coin.symbol})` : "Coin Details"}
      </h1>

      {loading && <Spinner size={4000} />}
      {error && <div className="error">{error}</div>}

      {!loading && !error && (
        <>
          <img src={coin.image.large} alt={coin.name} />
          <p>
            {coin.description.en.split(". ")[0]}.{" "}
            {coin.description.en.split(". ")[1]}.
          </p>

          <div className="coin-detail-info">
            <h3>Rank: #{coin.market_cap_rank}</h3>
            <h3>
              Current Price: $
              {coin.market_data.current_price.usd.toLocaleString()}
            </h3>
            <h4>
              Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}
            </h4>
            <h4>24h High: ${coin.market_data.high_24h.usd.toLocaleString()}</h4>
            <h4>24h Low: ${coin.market_data.low_24h.usd.toLocaleString()}</h4>
          </div>

          <CoinChart coinId={coin.id} />

          <div className="coin-details-links">
            {coin.links.homepage && (
              <p>
                <a href={coin.links.homepage} target="_blank">
                  Homepage
                </a>
              </p>
            )}

            {coin.links.blockchain_site[0] && (
              <p>
                <a href={coin.links.blockchain_site[0]} target="_blank">
                  Blockchain site
                </a>
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};
