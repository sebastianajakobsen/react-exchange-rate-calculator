import React, {useEffect, useState} from 'react';
import ExchangeRateSelect from "./ExchangeRateSelect";
import axios from 'axios';

function ExchangeRate({currencies}) {

    const [currencyOne, setCurrencyOne] = useState('DKK')
    const [currencyTwo, setCurrencyTwo] = useState('USD')

    const [rates, setRates] = useState([])

    //
    useEffect(()  => {
        axios.get(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
            .then(res => {
                setRates(res.data.rates)
            })
    }, [currencyOne])

    function updateSelected(value, valueType) {
        if(valueType === 1) {
            setCurrencyOne(value)
        } else {
            setCurrencyTwo(value)
        }
    }

    function handleButtonClick() {
        const temp = currencyOne;
        setCurrencyOne(currencyTwo)
        setCurrencyTwo(temp)
    }

    return (
        <div>
            <p>Choose the currency and the amounts to get the exchange rate</p>
            <p>1 {currencyOne} = {rates[currencyTwo]} {currencyTwo}</p>
            <div>
               <ExchangeRateSelect updateSelected={updateSelected} selected={currencyOne} valueType={1} currencies={currencies}/>
               <ExchangeRateSelect updateSelected={updateSelected} selected={currencyTwo} valueType={2} currencies={currencies}/>
               <button onClick={handleButtonClick}>Swap</button>
            </div>

        </div>
    );
}

export default ExchangeRate;