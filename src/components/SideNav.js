import './SideNav.css'
import Piggy from '../assets/img/piggy.gif'
import DateTime from './DateTime'

export default function SideNav() {
  return (
    <div className="sidenav-container">
      <img src={Piggy} alt='piggy' />
      <DateTime />
    </div>
  )
}
