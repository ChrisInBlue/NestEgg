//REDUX 
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
//CSS
import './Results.css'

export default function Results() {
    const { 
        myName, 
        ageValue, 
        retireAgeValue, 
        currencyValue, 
        retirementSavings, 
        retirementContribution, 
        requiredIncome 
    } = useSelector((state: RootState) => state.calculator);

    // Assuming life expectancy of 90 years
    const lifeExpectancy = 90;
    const yearsInRetirement = lifeExpectancy - retireAgeValue;

    const currentRetirementSavings = Number(retirementContribution) * 12 * yearsInRetirement;
    const requiredRetirementSavings = Number(requiredIncome) * 12 * yearsInRetirement;

    // Calculate the number of months until retirement age
    const yearsUntilRetirement = retireAgeValue - ageValue;
    const totalMonthsUntilRetirement = yearsUntilRetirement * 12;

    const additionalSavingsNeeded = Number(requiredRetirementSavings) - Number(retirementSavings);
    let monthlySavingsNeeded = additionalSavingsNeeded / totalMonthsUntilRetirement;
    monthlySavingsNeeded = Number(monthlySavingsNeeded.toFixed(2));

    // Format numbers for display at the very end
    const formattedCurrentRetirementSavings = currentRetirementSavings.toLocaleString();
    const formattedRequiredRetirementSavings = requiredRetirementSavings.toLocaleString();
    const formattedMonthlySavingsNeeded = monthlySavingsNeeded.toLocaleString();
    
  return (
    <div className='results-container'>
      <h2>Results</h2>
        <div>
            <h3>Hello <strong>{myName}</strong>,</h3>
            <p>For these calculations, we will be assuming the life expectency of <b>90 years</b>.</p>
        </div>
        <div className='block'>
            <p>Years till retirement.</p>
            <h5>{yearsUntilRetirement}</h5>
        </div>
        <div className='block'>
         <p>Current estimated retirement savings at retirement age.</p>
            <h5>
                <span>{currencyValue}</span>
                {formattedCurrentRetirementSavings}
            </h5>
        </div>
        <div className='block'>
         <p>Required retirement savings at retirement age.</p>
            <h5>
                <span>{currencyValue}</span>
                {formattedRequiredRetirementSavings}
            </h5>
        </div>
        <div className='block'>
            <p>Required monthly contribution to achieve retirement savings goal.</p>
            <h5>
                <span>{currencyValue}</span>
                {formattedMonthlySavingsNeeded}
                <em>per month</em>
            </h5>
        </div>
    </div>
  )
}
