import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <nav className='header'>
      <div className='header__logo'>
        <img src="logo.png" alt="logo" className='header_logo_img'/>
      </div>
      <div className='header_nav'>
                <ul>
                    <li className='header_nav_link'>
                        <NavLink
                            className='header_nav_link_navlink'
                            title='Accueil'
                            end to='/home'
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className='header_nav_link'>
                        <NavLink
                            className='header_nav_link_navlink'
                            title='À propos'
                            end to='/about'
                        >
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </div>
            </nav>
  )
}
export default Navbar