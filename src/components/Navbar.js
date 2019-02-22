import React from 'react'


const Navbar = () => {
  return (
    <nav>
      <div class='nav-wrapper teal '>
        <a href='#!' class='brand-logo left hide-on-small-and-down'>
          Movie DB
        </a>
        <ul class='right'>
          <li>
            <a href='/'>Top Movie</a>
          </li>
          <li>
            <a href='/'>Popular Movie</a>
          </li>
          <li class='active'>
            <a href='/'>Upcoming</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
