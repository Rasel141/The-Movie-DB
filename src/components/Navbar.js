import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper teal nav__root'>
        <Link to='/' className='brand-logo left hide-on-small-and-down'>
          The Movie DB
        </Link>

        <ul className='right'>
          <li>
            <NavLink to='/' exact>Top Movie</NavLink>
          </li>
          <li>
            <NavLink to='/popular' exact>Popular Movie</NavLink>
          </li>
          <li>
            <NavLink to='/upcoming' exact>Upcoming</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
