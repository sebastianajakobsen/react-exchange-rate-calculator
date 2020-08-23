import React from 'react';
import ExchangeRateOption from "./ExchangeRateOption";

function ExchangeRateSelect({currencies, selected, currencyType, updateSelected}) {

    function handleSelectChange(e) {
        updateSelected(e.target.value, currencyType)
    }

    return (
        <select onChange={handleSelectChange} defaultValue={selected} >
            {currencies.map((currency, index) => (

                <ExchangeRateOption name={currency} key={index} currency={currency}/>
            ))}
        </select>

    );
}

export default ExchangeRateSelect;