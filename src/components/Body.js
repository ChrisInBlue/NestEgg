import './Body.css'
import Calculator from './Calculator'
import Results from './Results'

export default function Body() {
  return (
    <div className='body-container'>
      <div className='title-wrap'>
        <p>Welcome to,</p>
        <h1>Nest Egg</h1>
        <h2>Retirement Calculator</h2>
      </div>
      <div className='flex-wrap'>
        <Calculator />
        <Results />
      </div>
    </div>
  )
}
