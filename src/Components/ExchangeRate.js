import React, {useEffect, useState} from 'react';
import ExchangeRateSelect from "./ExchangeRateSelect";
import axios from 'axios';


function ExchangeRate({currencies}) {

    const [currencyOne, setCurrencyOne] = useState('DKK')
    const [currencyTwo, setCurrencyTwo] = useState('USD')
    const [exchangeAmount, setExchangeAmount] = useState(1)
    const [rates, setRates] = useState([])
    const [exchangeRate, setExchangeRate] = useState(0)

    //
    useEffect(() => {
        axios.get(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
            .then(res => {
                setRates(res.data.rates)
                setExchangeRate((res.data.rates[currencyTwo] * exchangeAmount).toFixed(2))
            })
    }, [currencyOne])

    function updateSelected(value, valueType) {
        if (valueType === 1) {
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

    function handleInputChange(e) {
        if(e.target.value.trim()) {
            setExchangeAmount(Math.abs(e.target.value))
        } else {
            setExchangeAmount("")
        }

        setExchangeRate((rates[currencyTwo] * (Math.abs(e.target.value))).toFixed(2))
    }


    return (
        <div>
            <p>Choose the currency and the amounts to get the exchange rate</p>
            <p>1 {currencyOne} = {exchangeRate} {currencyTwo}</p>
            <div>
                <div className="flex">
                    <ExchangeRateSelect updateSelected={updateSelected} selected={currencyOne} currencyType={1}
                                        currencies={currencies}/>
                    <input type="number" onChange={handleInputChange} value={exchangeAmount} placeholder="0"/>
                </div>

                <div className="flex">
                    <button onClick={handleButtonClick}>Swap</button>
                </div>

                <div className="flex">
                    <ExchangeRateSelect updateSelected={updateSelected} selected={currencyTwo}  currencyType={2}
                                        currencies={currencies}/>
                    <p>{exchangeRate}</p>
                </div>
            </div>


        </div>
    );
}

export default ExchangeRate;