import { useState } from 'react';
// REDUX
import { useDispatch } from 'react-redux';
import { setCalculatorState } from '../redux/calculatorSlice';
// MATERIAL UI
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
// CSS
import './Calculator.css'

export default function Calculator() {
    const [ myName, setMyName ] = useState('')
    const [ ageValue, setAgeValue ] = useState(20);
    const [ retireAgeValue, setRetireAgeValue ] = useState(65);
    const [ currencyValue, setCurrencyValue ] = useState('');
    const [ retirementSavings, setRetirementSavings ] = useState('')
    const [ retirementContribution, setRetirementContribution ] = useState('')
    const [ requiredIncome, setRequiredIncome ] = useState('')

    const dispatch = useDispatch();

    const handleCalculateClick = () => {
        dispatch(setCalculatorState({
            myName,
            ageValue: parseInt(ageValue, 10),
            retireAgeValue: parseInt(retireAgeValue, 10),
            currencyValue,
            retirementSavings: parseFloat(retirementSavings.replace(/,/g, '')),
            retirementContribution: parseFloat(retirementContribution.replace(/,/g, '')),
            requiredIncome: parseFloat(requiredIncome.replace(/,/g, ''))
        }));
    };

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
    const handleInputChange = (event, setState) => {
        let inputValue = event.target.value.replace(/,/g, '');
        inputValue = inputValue.replace(/\D/g,''); 
        const formattedInputValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        setState(formattedInputValue); 
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
                    onChange={ (e) => setMyName(e.target.value) }
                    value={ myName }
                    required
                />
            </div>
            {/* CURRENT AGE */}
            <div className='input-group'>
                <label>What is your current age?</label>
                <Slider 
                    value={Number(ageValue)} 
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
                    value={Number(retireAgeValue)} 
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
                    value={ currencyValue }
                    onChange={(e) => setCurrencyValue(e.target.value)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            {currencies.find(currency => currency.value === currencyValue)?.label}
                        </InputAdornment>,
                    }}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.label}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField 
                    required
                    id="retirementSavings" 
                    label="What is your current retirement savings?" 
                    variant="outlined" 
                    value={retirementSavings}
                    onChange={(e) => handleInputChange(e, setRetirementSavings)}
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
                    required
                    id="retirementContribution" 
                    label="What is your current retirement savings contribution?" 
                    variant="outlined" 
                    value={retirementContribution}
                    onChange={(e) => handleInputChange(e, setRetirementContribution)}
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
                    required
                    id="requiredIncome" 
                    label="What is your required monthly income at retirement?" 
                    variant="outlined" 
                    value={requiredIncome}
                    onChange={(e) => handleInputChange(e, setRequiredIncome)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            {currencyValue}
                        </InputAdornment>,
                    }}
                />
            </div>
            <div className='input-group btn-group'>
                <Button 
                    variant="contained"
                    onClick={handleCalculateClick}
                >
                    Calculate
                </Button>
            </div>
        </Box>
    </div>
  )
}
