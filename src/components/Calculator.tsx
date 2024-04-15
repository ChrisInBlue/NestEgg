import React, { useState } from 'react';
// REDUX
import { useDispatch } from 'react-redux';
import { setCalculatorState } from '../redux/calculatorSlice';
// MATERIAL UI
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Tooltip from '@mui/material/Tooltip';
// CUSTOM CSS
import './Calculator.css';

// Markers array for age sliders
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
    }
];

interface CurrencyOption {
  value: string;
  label: string;
}

const currencies: CurrencyOption[] = [
  { value: 'ZAR', label: 'R' },
  { value: 'USD', label: '$' },
  { value: 'EUR', label: '€' },
  { value: 'BTC', label: '฿' },
  { value: 'JPY', label: '¥' },
];
// Passing life expectancy prop from parent (Body.js) to child component
interface CalculatorProps {
    lifeExpectancy: number;
}

const Calculator: React.FC<CalculatorProps> = ({ lifeExpectancy }) => {
    const [myName, setMyName] = useState<string>('');
    const [ageValue, setAgeValue] = useState<number>(35);
    const [retireAgeValue, setRetireAgeValue] = useState<number>(65);
    const [currencyValue, setCurrencyValue] = useState<string>('');
    const [retirementSavings, setRetirementSavings] = useState<number>(0);
    const [retirementContribution, setRetirementContribution] = useState<number>(0);
    const [requiredIncome, setRequiredIncome] = useState<number>(0);
    const [nameError, setNameError] = useState<boolean>(false);
    const [ageError, setAgeError] = useState<boolean>(false);
    const [currencyError, setCurrencyError] = useState<boolean>(false);
    const [retirementSavingsError, setRetirementSavingsError] = useState<boolean>(false);
    const [retirementContributionError, setRetirementContributionError] = useState<boolean>(false);
    const [requiredIncomeError, setRequiredIncomeError] = useState<boolean>(false);
    const [snack, setSnack] = useState<boolean>(false);

    const dispatch = useDispatch();

    //  Validate form fields on submit
    const validateFields = () => {
        let isValid = true;

        // Resetting all error states
        setNameError(false);
        setAgeError(false);
        setCurrencyError(false);
        setRetirementSavingsError(false);
        setRetirementContributionError(false);
        setRequiredIncomeError(false);

        // Check #name has a value
        if (!myName.trim()) {
            setNameError(true);
            isValid = false;
            setSnack(true);
        }

        // Check current age is less than or equal to retirement age
        if (ageValue > retireAgeValue) {
            setAgeError(true);
            isValid = false;
            setSnack(true);
        }

        // Check #currency has been selected
        if (!currencyValue.trim()) {
            setCurrencyError(true);
            isValid = false;
            setSnack(true);
        }

        // // Check #retirementSavings has a value
        // if (retirementSavings <= 0) {
        //     setRetirementSavingsError(true);
        //     isValid = false;
        //     setSnack(true);
        // }

        // // Check #retirementContribution has a value
        // if (retirementContribution <= 0) {
        //     setRetirementContributionError(true);
        //     isValid = false;
        //     setSnack(true);
        // }

        // Check #requiredIncome has a value
        if (requiredIncome <= 0) {
            setRequiredIncomeError(true);
            isValid = false;
            setSnack(true);
        }

        return isValid;
    };

    const handleCalculateClick = () => {
        // Validates fields before dispatch
        if (validateFields()) {
            dispatch(setCalculatorState({
                myName,
                ageValue,
                retireAgeValue,
                currencyValue,
                retirementSavings,
                retirementContribution,
                requiredIncome
            }));
            setSnack(false)
        }
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, 
        setState: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<number>>
      ) => {
        const inputValue = event.target.value.replace(/,/g, '').replace(/\D/g, '');
        const formattedInputValue = inputValue ? parseFloat(inputValue) : 0;
      
        // Check if setState expects a number or a string and call accordingly
        if (setState === setRetirementSavings || setState === setRetirementContribution || setState === setRequiredIncome) {
          (setState as React.Dispatch<React.SetStateAction<number>>)(formattedInputValue);
        } else {
          (setState as React.Dispatch<React.SetStateAction<string>>)(inputValue);
        }
    };
      

    const handleAgeSlider = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setAgeValue(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const handleRetireAgeSlider = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setRetireAgeValue(event.target.value === '' ? 0 : Number(event.target.value));
    };

  return (
    <div className='calc-container'>
        <Box 
            component="form"
            autoComplete="off"
        >
            {/* NAME */}
            <div className='input-group'>
                <Tooltip title="Enter your full name. This is used to personalize your retirement savings plan." placement="top" arrow>
                    <TextField 
                        id="name" 
                        label="What is you name?" 
                        variant="outlined" 
                        onChange={ (e) => setMyName(e.target.value) }
                        value={ myName }
                        required
                        error={nameError}
                    />
                </Tooltip>
            </div>
            {/* CURRENT AGE */}
            <div className='input-group'>
                <label>What is your current age?</label>
                <Tooltip title="Enter your current age. This helps calculate the number of years until you reach retirement and the duration of your retirement savings plan." placement="top" arrow>
                    <Slider 
                        value={Number(ageValue)} 
                        valueLabelDisplay="auto" 
                        onChange={(e, newValue) => { 
                            setAgeValue(Array.isArray(newValue) ? newValue[0] : newValue); 
                        }}
                        marks={marks}
                        aria-labelledby="input-age-slider"
                        max={lifeExpectancy}
                    />
                </Tooltip>
                <div className='value-box'>
                    <p>Current Age:</p>
                    <span>
                        <Input
                            value={Number(ageValue)}
                            size="small"
                            onChange={handleAgeSlider}
                            inputProps={{
                            step: 1,
                            min: 0,
                            max: 90,
                            type: 'number',
                            'aria-labelledby': 'input-age-slider',
                            }}
                            error={ageError}
                        />
                    </span>
                </div>
            </div>
            {/* RETIREMENT AGE */}
            <div className='input-group'>
                <label>What is your retirement age?</label>
                <Tooltip title="Specify the age at which you plan to retire. This will be used to determine how long we need to plan your savings and investments." placement='top' arrow>
                    <Slider 
                        value={Number(retireAgeValue)} 
                        valueLabelDisplay="auto" 
                        onChange={(e, newValue) => { 
                            setRetireAgeValue(Array.isArray(newValue) ? newValue[0] : newValue); 
                        }}
                        min={ageValue}
                        marks={marks}
                        aria-labelledby="input-retire-age-slider"
                        max={lifeExpectancy}
                    />
                </Tooltip>
                <div className='value-box'>
                    <p>Retirement Age:</p>
                    <span>
                        <Input
                            value={Number(retireAgeValue)}
                            size="small"
                            onChange={handleRetireAgeSlider}
                            inputProps={{
                            step: 1,
                            min: 0,
                            max: 90,
                            type: 'number',
                            'aria-labelledby': 'input-retire-age-slider',
                            }}
                        />
                    </span>
                </div>
            </div>
            {/* CURRENT RETIREMENT SAVINGS */}
            <div className='input-group input-group-shared'>
                <Tooltip title="Select the currency for your financial inputs and outputs. This affects how your retirement savings and contributions are calculated and displayed." placement="top" arrow>
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
                        error={currencyError}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.label}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Tooltip>
                <Tooltip title="Enter the total amount you currently have saved for retirement. This amount will be considered in calculating how much more you need to save." placement="top" arrow>
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
                        error={retirementSavingsError}
                    />
                </Tooltip>
            </div>
            {/* CURRENT RETIREMENT SAVINGS CONTRIBUTION */}
            <div className='input-group'>
                <Tooltip title="Specify how much you are currently contributing to your retirement savings each month. This helps in projecting the growth of your savings over time." placement="top" arrow>
                    <TextField 
                        required
                        id="retirementContribution" 
                        label="What is your current retirement savings contribution per month?" 
                        variant="outlined" 
                        value={retirementContribution}
                        onChange={(e) => handleInputChange(e, setRetirementContribution)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                {currencyValue}
                            </InputAdornment>,
                        }}
                        error={retirementContributionError}
                    />
                </Tooltip>
            </div>
            {/* MONTHLY INCOME REQUIRED AT RETIREMENT */}
            <div className='input-group'>
                <Tooltip title="Enter the monthly income you will need during retirement to maintain your desired lifestyle. This helps us calculate the total retirement savings required." placement="top" arrow>
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
                        error={requiredIncomeError}
                    />
                </Tooltip>
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
        <Snackbar 
            open={snack} 
            autoHideDuration={5000} 
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
            >
                Oops! There was an issue. Please make sure all fields are filled out correctly.
            </Alert>
        </Snackbar>
    </div>
  );
};
export default Calculator;
