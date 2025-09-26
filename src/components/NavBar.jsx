import React from 'react'
import { NavLink } from 'react-router'
const styles = {
  link: 'hover: text-amber-950'
}


function NavBar() {
  return (
    <nav className='mb-10'>
      <ul className='flex justify-center gap-[50px]'>
        <li className={styles.link}><NavLink to='/'>Home</NavLink></li>
        <li className={styles.link}><NavLink to='about'>About</NavLink></li>
        <li className={styles.link}><NavLink to='products'>Products</NavLink></li>
        </ul>
        </nav>
  )
}

export default NavBar