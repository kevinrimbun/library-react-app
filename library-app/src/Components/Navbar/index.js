import React from 'react';
import { BsJustify, BsSearch } from 'react-icons/bs';
import '../../Style/Components/navbar.css'
import Logo from '../../assets/lily.png'


const Navbar = () => {
  return (
    <nav>
        <ul className='navbar'>
            <div>
                <li><BsJustify /></li>
            </div>
            <div className='list-wrapper'> 
                <li>All Categories</li>
                <li>All Time</li>
            </div>
            <div className='search-wrapper'>
            <form className="form-inline mx-auto">
                <input className="search-bar" type="search" placeholder="Search" aria-label="Search"/>
                <BsSearch className='search-logo' />
            </form>
            </div>
            <div className='logo-wrapper'>
                <img src={Logo} className='img-logo'/>
                <div className='text-logo'>Lily</div>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar