import React from 'react';
import ExchangeRateOption from "./ExchangeRateOption";

function ExchangeRateSelect({currencies, selected, currencyType, updateSelected}) {

    function handleSelectChange(e) {
        updateSelected(e.target.value, currencyType)
    }

    return (
        <select onChange={handleSelectChange} value={selected} className="font-bold appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
            {currencies.map((currency, index) => (
                <ExchangeRateOption name={currency} key={index} currency={currency}/>
            ))}
        </select>

    );
}

export default ExchangeRateSelect;