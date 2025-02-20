import { NavLink } from "react-router-dom"
import './Header.css'
function Header() {
  return (
    <div className="header-section container">
      <div className="header-navbar">
        <div className="logo">
            <p>Prime</p>
            <span>Kit</span>
        </div>
          <div className="pages">
            <div className="nav">
                <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/'>Start</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/about'>About</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/solutions'>Solutions</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/pages'>Pages</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to='/contact'>Contact</NavLink>
            </div>
            <div className="btn">
                <p>Get Started now</p>
                <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
      </div>
      <div className="header-text">
        <h2>Help center</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius doloribus quisquam, commodi <br /> blanditiis exercitationem excepturi laborum.</p>
      </div>
    </div>
  )
}

export default Header
