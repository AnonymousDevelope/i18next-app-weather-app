import React, { useContext, useState } from 'react'
import './Input.css'
import { WeatherContext } from '../../context/context';
const Input = ({...props}) => {
  const {setCity} = useContext(WeatherContext)
  const [input,setInput] = useState('');
  const handleChange=(e)=>{
    e.preventDefault();
    setInput(e.target.value)
  }
  const searchCity=()=>{
    setCity(input);
    setInput('');
  }
  const handleKeyDown=(e)=>{
    if(e.key === 'Enter'){
      searchCity();
    }
  }
  return (
    <div className="weather-input-group">
        <input type="text" onKeyDown={handleKeyDown} value={input} onChange={handleChange}  className='input-search' name="search"  {...props} />
        <button  onClick={searchCity} disabled={!input} className="btn-search">
            Search
        </button>
    </div>
  )
}

export default Input