# CryptX
# Cryptocurrency Portfolio Tracker

## 📌 Overview

The **Cryptocurrency Portfolio Tracker** is a web application that allows users to track their cryptocurrency holdings, manage their portfolio, and view real-time market data. Users can log in, add cryptocurrencies to their wallet/account, and monitor their portfolio's value using live data fetched from the **CoinGecko API**.

## 🚀 Features

- **User Authentication** – Secure login and account management.
- **Real-Time Crypto Data** – Fetches live prices, market cap, and other relevant data from **CoinGecko API**.
- **Portfolio Management** – Users can add, update, and remove cryptocurrencies in their portfolio.
- **Wallet Tracking** – Track holdings and view total portfolio value.
- **Responsive UI** – Optimized for both desktop and mobile users.

## 🛠️ Tech Stack

- **Frontend**: React.js / Vue.js / Angular (choose based on your implementation)
- **Backend**: Node.js with Express / Django / Flask
- **Database**: MongoDB / PostgreSQL / MySQL
- **Authentication**: JWT / Firebase Auth
- **API**: CoinGecko API for real-time crypto data
- **Hosting**: Vercel / Netlify / Heroku / AWS (based on deployment choice)

## 🔧 Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/crypto-portfolio-tracker.git
   cd crypto-portfolio-tracker
   ```

2. **Install Dependencies**

   ```bash
   npm install   # or yarn install
   ```

3. **Set Up Environment Variables** Create a `.env` file in the root directory and add:

   ```
   REACT_APP_API_KEY=your_coin_gecko_api_key
   BACKEND_URL=http://localhost:5000
   ```

4. **Run the Application**

   - **Frontend**
     ```bash
     npm start   # or yarn start
     ```
   - **Backend** (if applicable)
     ```bash
     npm run server   # or python manage.py runserver
     ```

## 📡 API Integration

This project uses the **CoinGecko API** to fetch real-time cryptocurrency data. Example API request:

```bash
GET https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd
```

## 📸 Screenshots

*(Add relevant UI screenshots here)*

## 📜 License

This project is licensed under the **MIT License**.

## 🤝 Contribution

Feel free to contribute by forking the repository and creating pull requests.

## 📧 Contact

For queries, reach out at [**your.email@example.com**](mailto\:your.email@example.com) or create an issue on GitHub!

---

🚀 **Start tracking your cryptocurrency portfolio today!** 🚀

