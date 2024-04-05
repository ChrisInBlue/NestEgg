import { useState } from 'react';
import Slider from '@mui/material/Slider';
import './Calculator.css'

export default function Calculator() {
    const [ ageValue, setAgeValue ] = useState(20);

  return (
    <div className='calc-container'>
      <div className='input-group'>
        <label>What is your current age?</label>
        <Slider 
            defaultValue={ageValue} 
            aria-label="Default" 
            valueLabelDisplay="auto" 
            onChange={
                (e, newValue) => { setAgeValue(newValue); }
            }
        />
        <p className='value-box'>
            Age: <span>{ageValue}</span>
        </p>
      </div>
    </div>
  )
}
