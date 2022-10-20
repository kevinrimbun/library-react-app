import React from 'react';
import { BsJustify, BsSearch } from 'react-icons/bs';
import '../../Style/Components/navbar.css';
import Logo from '../../assets/lily.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Navbar = () => {
  return (
    <nav>
        <ul className='navbar'>
            <div>
                <li><BsJustify /></li>
            </div>
            {/* Dropdown React Bootsrap */}
            <div className='dropdown-wrapper'>
                <div className='dropdown-left'> 
                    <DropdownButton id="dropdown-basic-button" title="All Categories">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className='dropdown-right'>
                    <DropdownButton id="dropdown-basic-button" title="All Time">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </div>
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