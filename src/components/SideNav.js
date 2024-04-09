import { NavLink } from 'react-router-dom'
import './SideNav.css'
import Pig from '../assets/img/icons/piggy-bank-3.png'
import Home from '../assets/img/icons/house-blank.svg'
import Computer from '../assets/img/icons/computer.svg'
import Box from '../assets/img/icons/box.svg'
import DateTime from './DateTime'
import ThemeSwitch from './ThemeSwitch'

export default function SideNav() {
  return (
    <div className="sidenav-container">
      <img src={Pig} alt='logo' />
      <div className='nav-menu'>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <img src={Home} alt='home' />
          <p>Layout 1</p>
        </NavLink>
        <NavLink to="/layout-2" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <img src={Computer} alt='home' />
          <p>Layout 2</p>
        </NavLink>
        <NavLink to="/layout-3" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <img src={Box} alt='home' />
          <p>Layout 3</p>
        </NavLink>
      </div>
      <ThemeSwitch />
      <DateTime />
    </div>
  )
}
