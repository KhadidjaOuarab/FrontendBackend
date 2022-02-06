import React from 'react'
import '../App.css'
import { useState } from 'react'

function Input({ label,sendValue, calculate}) {
    const [inputVal, setInputVal] = useState(0);
    const getValue = (e) => {
        setInputVal(parseInt(e.target.value))
    }

    const  printValue  = (e) => {
        e.preventDefault()
        sendValue(inputVal)
        calculate()
        setInputVal(0)
    
      }


    return (
        <div>
            <form onSubmit={printValue} className='col' >
                <h2>{label}</h2>
                <input onChange={getValue} type="text" value={inputVal}></input>
               
            </form>
        </div>
    )
}

export default Input
