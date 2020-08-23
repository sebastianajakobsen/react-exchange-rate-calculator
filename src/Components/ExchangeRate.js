import React, {useState} from 'react';
import ExchangeRateSelect from "./ExchangeRateSelect";

function ExchangeRate({currencies}) {

    const [value1, setValue1] = useState('DKK')
    const [value2, setValue2] = useState('USD')

    function updateSelected(value, valueType) {
        if(valueType === 1) {
            setValue1(value)
        } else {
            setValue2(value)
        }

    }

    return (

        <div>
            <p>Choose the currency and the amounts to get the exchange rate</p>

            <div>
               <ExchangeRateSelect updateSelected={updateSelected} selected={value1} valueType={1} currencies={currencies} />
               <ExchangeRateSelect updateSelected={updateSelected} selected={value2} valueType={2} currencies={currencies}/>
            </div>

        </div>
    );
}

export default ExchangeRate;