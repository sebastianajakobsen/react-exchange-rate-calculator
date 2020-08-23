import React, {useState} from 'react';
import Header from "./Components/Header";
import ExchangeRate from "./Components/ExchangeRate";
function App() {

    const [currencies] = useState(
        [
            "AED", "ARS", "AUD", "BGN", "BRL", "BSD", "CAD", "CHF", "CLP", "CNY", "COP", "CZK",
            "DKK", "DOP", "EGP", "EUR", "FJD", "GBP", "GTQ", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW",
            "KZT", "MXN", "MYR", "NOK", "NZD", "PAB", "PEN", "PHP", "PKR", "PLN", "PYG", "RON", "RUB", "SAR", "SEK", "SGD", "THB",
            "TRY", "TWD", "UAH", "USD", "UYU", "VND", "ZAR"
        ]
    )

    return (
    <div className="rounded-t-lg overflow-hidden border-t border-l border-r  px-3 py-10 flex justify-center">
      <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Header/>
      <ExchangeRate currencies={currencies}/>
    </div>
    </div>
  );
}

export default App;
