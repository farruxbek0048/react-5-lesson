import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <h1 className='logo-1'>Prime</h1>
        <h1 className='logo-2'>Kit</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to='/' className={({isActive}) => (isActive? "active-link" : "")}>Start</NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({isActive}) => (isActive? "active-link" : "")}>Start</NavLink>
          </li>
        </ul>
        <button className="started">Get Started Now</button>
      </nav>
    </div>
  )
}

export default Navbar
