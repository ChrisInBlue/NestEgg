//REDUX 
import { useSelector } from 'react-redux';
//CSS
import './Results.css'

export default function Results() {
    const { myName, ageValue, retireAgeValue, currencyValue, retirementSavings, retirementContribution, requiredIncome } = useSelector((state) => state.calculator);

    const yearsToRetirement = retireAgeValue - ageValue;
    const savingsAtRetirementAge = retirementSavings + ((yearsToRetirement * 12) * retirementContribution);
    const requiredContributions = requiredIncome;
    
  return (
    <div className='results-container'>
      <h2>Results</h2>
      <div>
        <h3>Hello <strong>{myName}</strong>,</h3>
        <p>Your retirement income means the amount of money you might need to live the retirement lifestyle you'd like.</p>
      </div>
      <div className='block'>
        <p>Years till retirement.</p>
        <h5>{}{yearsToRetirement}</h5>
      </div>
      <div className='block'>
        <p>Required Retirement Savings at Retirement Age.</p>
        <h5>
            <span>{currencyValue}</span>
            {savingsAtRetirementAge}
        </h5>
      </div>
      <div className='block'>
        <p>Required Monthly Contribution to achieve retirement savings goal.</p>
        <h5>
            <span>{currencyValue}</span>
            {requiredContributions}
        </h5>
      </div>
    </div>
  )
}
