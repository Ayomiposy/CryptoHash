import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import "chart.js/auto";

import "chartjs-adapter-date-fns";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   LineElement,
//   PointElement,
//   Legend,
//   TimeScale,
// );

const API_URL = import.meta.env.VITE_COIN_API_URL;

export const CoinChart = ({ coinId }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchChart = async () => {
      const res = await fetch(
        `${API_URL}/${coinId}/market_chart?vs_currency=usd&days=7`,
      );

      if (!res.ok) throw new Error("Failed to fetch coin chart");

      const data = await res.json();

      //   create the database array set for the chart

      const prices = data.prices.map((price) => ({
        x: price[0],
        y: price[1],
      }));

      console.log("prices", prices);

      //   set chart data

      setChartData({
        datasets: [
          {
            label: "prices (USDP",
            data: prices,
            // additional design data
            fill: true,
            borderColor: "#007bff",
            backgroundColor: "rgba(0, 123, 225, 0.5)",
            pointRadius: 0,
            tension: 0.3,
          },
        ],
      });

      setLoading(false);
    };

    fetchChart();
  }, [coinId]);

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
      },
    },
  };

  if (loading) return <p> Loading Chart</p>;
  return (
    <div style={{ marginTop: "30px" }}>
      {chartData && <Line data={chartData} options={options} />}
    </div>
  );
};
