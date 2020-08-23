import React from 'react';

function ExchangeRateOption({currency}) {
    return (
        <option value={currency}>{currency}</option>
    );
}

export default ExchangeRateOption;