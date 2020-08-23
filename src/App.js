import React, {useState} from 'react';
import Header from "./Components/Header";
import ExchangeRate from "./Components/ExchangeRate";
function App() {

    const [currencies, setCurrencies] = useState(
        [
            "AED", "ARS", "AUD", "BGN", "BRL", "BSD", "CAD", "CHF", "CLP", "CNY", "COP", "CZK",
            "DKK", "DOP", "EGP", "EUR", "FJD", "GBP", "GTQ", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW",
            "KZT", "MXN", "MYR", "NOK", "NZD", "PAB", "PEN", "PHP", "PKR", "PLN", "PYG", "RON", "RUB", "SAR", "SEK", "SGD", "THB",
            "TRY", "TWD", "UAH", "USD", "UYU", "VND", "ZAR"
        ]
    )

    return (
    <div>
      <Header/>
      <ExchangeRate currencies={currencies}/>
    </div>
  );
}

export default App;
