import React, { useState } from 'react';
import { BsJustify, BsSearch } from 'react-icons/bs';
import '../../Style/Components/navbar.css';
import Niki from '../../assets/niki.svg'
import Logo from '../../assets/lily.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import ModalAdd from '../ModalAdd';


const Navbar = () => {


    return (
        <nav className='nav-homepage'>
            <ul className='navbar'>
                <div className='toggle-navbar'>
                    <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <label for="check">
                            <li><BsJustify /></li>
                        </label>
                    </button>
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <button className="btn-close" data-bs-dismiss="offcanvas">
                            <BsJustify />
                        </button>

                        <div className="offcanvas-header">
                            <img src={Niki} alt="" srcset=""/>
                        </div>
                        <div class="offcanvas-body">
                            <div className='sidebar-name'>Niki Zefanya</div>
                            <div className='btn-logout text-center'>
                                <Link to='/' className='d-flex'>
                                    <i class="bi bi-box-arrow-right"></i>
                                    <p>Logout</p>
                                </Link>
                            </div>
                            <div className='menu-sidebar'>
                                <div>Explore</div> 
                                <div>History</div>
                                <div>
                                    <ModalAdd className="button-add" buttonName='Add Book'/>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <img src={Logo} alt="Logo" className='img-logo'/>
                    <div className='text-logo'>Lily</div>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar