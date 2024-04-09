// features/calculator/calculatorSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    myName: '',
    ageValue: 20,
    retireAgeValue: 65,
    currencyValue: 'R',
    retirementSavings: '',
    retirementContribution: '',
    requiredIncome: '',
  },
  reducers: {
    setCalculatorState: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setCalculatorState } = calculatorSlice.actions;

export default calculatorSlice.reducer;
