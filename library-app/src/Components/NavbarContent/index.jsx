import React from 'react';
import '../../Style/Components/navContent.css'

const NavContent = () => {
  return (
    <nav className="nav-content">
        <div className='arrow-nav'>
        <i class="bi bi-arrow-left-short rounded-circle px-1"></i>
        </div>
        <div>
            <ul className='d-flex'>
                <li class="pe-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</li>
                <li class="pe-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</li>
            </ul>
        </div>
    </nav>
  )
}

export default NavContent