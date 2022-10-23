import React from 'react';
import '../../Style/Components/navContent.css'
import { Link } from 'react-router-dom';
import ModalDelete from '../ModalDelete';
import ModalEdit from '../ModalEdit';

const NavContent = () => {
  return (
    <nav className="nav-content">
        <div className='arrow-nav'>
          <Link to='/home'>
            <i class="bi bi-arrow-left-short rounded-circle px-1"></i>
          </Link>
        </div>
        <div>
            <ul className='d-flex'>
                <li class="pe-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <ModalEdit buttonName='Edit'/>
                </li>
                <li class="pe-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <ModalDelete buttonName='Delete' modalTitle='Delete Book'/>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavContent