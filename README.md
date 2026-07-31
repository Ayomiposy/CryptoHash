# CryptoHash

CryptoHash is a React + Vite cryptocurrency dashboard that helps you explore market data, compare coins, and navigate essential metrics in a fast, intuitive interface.

## 🚀 What it does

- Fetches live cryptocurrency data from the CoinGecko API
- Displays market metrics like price, market cap, volume, and 24h change
- Supports search by coin name or symbol
- Enables sorting by market cap, price, and price change
- Lets you choose how many coins to display per page
- Includes dedicated pages for coin details, about, and 404 handling

## 🧱 Tech stack

- React 19
- Vite 8
- JavaScript
- CSS
- Chart.js + react-chartjs-2
- CoinGecko API
- React Router v8

## 📁 Project structure

- `src/App.jsx` — root app with routes and global state
- `src/pages/` — page-level views (`homepage`, `aboutPage`, `coinDetails`, `notFound`)
- `src/components/` — reusable UI building blocks like search, sorting, cards, and spinner
- `src/assets/` — static assets

## ⚙️ Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crytohash.git
   cd "CrytoHash"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the project root and add your API base URL:
   ```env
   VITE_API_URL=https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd
   ```
4. Run the dev server:
   ```bash
   npm run dev
   ```

Open the local URL shown in the terminal to view the app.

## 🧪 Available scripts

- `npm run dev` — start development server
- `npm run build` — create production build
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint

## 💡 Notes

- The app uses Vite environment variables via `import.meta.env.VITE_API_URL`.
- The homepage supports real-time filtering and sorting while the detail page shows deeper coin insights.
- Designed for learning, quick iteration, and fast crypto exploration.

## 📄 License

Open for learning and personal use.
