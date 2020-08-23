import React from 'react';
import ExchangeRateOption from "./ExchangeRateOption";

function ExchangeRateSelect({currencies, selected, valueType, updateSelected}) {

    function handleSelectChange(e) {
        updateSelected(e.target.value, valueType)
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