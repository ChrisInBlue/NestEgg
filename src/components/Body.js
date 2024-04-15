import './Body.css'
import Calculator from './Calculator'
import Results from './Results'
import Pig from '../assets/img/icons/piggy-bank-3.png'

export default function Body() {
  // Assuming life expectancy of 90 years
  const lifeExpectancy = 90;

  return (
    <div className='body-container'>
      <div className='title-wrap'>
        <p>Welcome to,</p>
        <h1>Nest Egg</h1>
        <h2>Retirement Calculator</h2>
        <img src={Pig} alt='mobile-logo' className='mobile-logo' />
      </div>
      <div className='flex-wrap'>
        <Calculator lifeExpectancy={lifeExpectancy} />
        <Results lifeExpectancy={lifeExpectancy} />
      </div>
    </div>
  )
}
