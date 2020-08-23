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
    }, [currencyOne, currencyTwo, exchangeAmount ])

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
            <p className="my-8 text-center">Choose the currency and the amounts to get the exchange rate</p>

            <div>
                <div className="flex relative justify-between items-center">
                    <ExchangeRateSelect updateSelected={updateSelected} selected={currencyOne} currencyType={1}
                                        currencies={currencies}/>
                    <input className="block bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="number" onChange={handleInputChange} value={exchangeAmount} placeholder="0"/>
                </div>

                <div className="flex justify-between my-4 items-center">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>Swap</button>
                    <p className="text-purple-500">1 {currencyOne} = {exchangeRate} {currencyTwo}</p>
                </div>

                <div className="flex relative justify-between items-center">
                    <ExchangeRateSelect updateSelected={updateSelected} selected={currencyTwo}  currencyType={2}
                                        currencies={currencies}/>
                    <h3 className="text-2xl font-bold">{exchangeRate}</h3>
                </div>
            </div>


        </div>
    );
}

export default ExchangeRate;