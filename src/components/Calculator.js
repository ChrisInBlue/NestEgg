import { useState } from 'react';
// MATERIAL UI
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
// CSS
import './Calculator.css'

export default function Calculator() {
    const [ ageValue, setAgeValue ] = useState(20);
    const [ retireAgeValue, setRetireAgeValue ] = useState(65);
    const [ currencyValue, setCurrencyValue ] = useState('R');
    const [retirementSavings, setRetirementSavings] = useState('')

    // SET MARKERS FOR THE RETIREMENT AGE SLIDER
    const marks = [
        {
            value: 20,
            label: 20
        },
        {
            value: 40,
            label: 40
        },
        {
            value: 60,
            label: 60
        },
        {
            value: 80,
            label: 80
        },
        {
            value: 100,
            label: 100
        },
    ];
    const currencies = [
        {
            value: 'ZAR',
            label: 'R',
          },
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];

      // ADD THOUSAND COMMA SEPARATOR
      const addComma = (e) => {
        let inputValue = e.target.value.replace(/,/g, ''); 
        inputValue = inputValue.replace(/\D/g,''); 
        const formattedInputValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        setRetirementSavings(formattedInputValue); 
    };

  return (
    <div className='calc-container'>
        <Box 
            component="form"
            noValidate
            autoComplete="off"
        >
            {/* NAME */}
            <div className='input-group'>
                <TextField 
                    id="name" 
                    label="What is you name?" 
                    variant="outlined" 
                />
            </div>
            {/* CURRENT AGE */}
            <div className='input-group'>
                <label>What is your current age?</label>
                <Slider 
                    value={[ageValue]} 
                    aria-label="Default" 
                    valueLabelDisplay="auto" 
                    onChange={
                        (e, newValue) => { setAgeValue(newValue); }
                    }
                    marks={marks}
                />
                <p className='value-box'>
                    Current Age: <span>{ageValue}</span>
                </p>
            </div>
            {/* RETIREMENT AGE */}
            <div className='input-group'>
                <label>What is your retirement age?</label>
                <Slider 
                    value={retireAgeValue} 
                    aria-label="Default" 
                    valueLabelDisplay="auto" 
                    onChange={
                        (e, newValue) => { setRetireAgeValue(newValue); }
                    }
                    min={ageValue}
                    marks={marks}
                />
                <p className='value-box'>
                    Retirement Age: <span>{retireAgeValue}</span>
                </p>
            </div>
            {/* CURRENT RETIREMENT SAVINGS */}
            <div className='input-group input-group-shared'>
                <TextField
                    id="currency"
                    select
                    label="Currency"
                    defaultValue="ZAR"
                    onChange={
                        (e, newCurrencyValue) => { setCurrencyValue(newCurrencyValue); }
                    }
                    >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField 
                    id="retirementSavings" 
                    label="What is your current retirement savings?" 
                    variant="outlined" 
                    value={retirementSavings}
                    onChange={addComma}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            {currencyValue}
                        </InputAdornment>,
                    }}
                />
            </div>
            {/* CURRENT RETIREMENT SAVINGS CONTRIBUTION */}
            <div className='input-group'>
                <TextField 
                    id="retirementContribution" 
                    label="What is your current retirement savings contribution?" 
                    variant="outlined" 
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            {currencyValue}
                        </InputAdornment>,
                    }}
                />
            </div>
            {/* MONTHLY INCOME REQUIRED AT RETIREMENT */}
            <div className='input-group'>
                <TextField 
                    id="requiredIncome" 
                    label="What is your required monthly income at retirement?" 
                    variant="outlined" 
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            {currencyValue}
                        </InputAdornment>,
                    }}
                />
            </div>
        </Box>
    </div>
  )
}
