import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowCircleRight } from "react-icons/fa";
import axios from 'axios';

function Currency() {

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState();



    let BASE_URL='https://api.freecurrencyapi.com/v1/latest'
    let API_KEY='fca_live_0QA88ZaaHYbkhMYZdDD5otmYx66up3JJ0FCZkgEu'


    const exchange = async ()=>{
        const response= await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        setResult((response.data.data[toCurrency]*amount).toFixed(2))
    }

    return (
        <div className='currency-div'>
            <div>
                <h3 style={{fontSize:'25px', fontFamily: 'arial', color: '#fff' }}>DÖVİZ KURU UYGULAMASI</h3>
            </div>
            <div>
                <input 
                value={amount}
                onChange={(e)=>setAmount(e.target.value)} 
                type='number' 
                className='amount'></input>
                <select
                onChange={(e)=>setFromCurrency(e.target.value)} 
                className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaArrowCircleRight style={{ color: "#fff", marginRight: '10px', fontSize: '30px' }} />

                <select 
                onChange={(e)=> setToCurrency(e.target.value)}
                className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <input 
                value={result}
                onChange={(e)=>setResult(e.target.value)}
                type='number' className='result'></input>
            </div>
            <div>
                <button 
                onClick={exchange}
                style={{width:'200px', height:'70px' ,padding:'15px 20px', fontFamily:'arial', backgroundColor:'red', color:'#fff', borderRadius:'20px', cursor:'pointer'}}>ÇEVİR</button>

            </div>

        </div>
    )
}

export default Currency
