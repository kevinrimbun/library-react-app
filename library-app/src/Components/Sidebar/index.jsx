import React from 'react';
import '../../Style/Components/sidebar.css';
import Niki from '../../assets/niki.svg'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
        // Sidebar Menu
    <div>
        <div class="sidebar">
            <input type="checkbox" id="check"/>
            <header>
                <img src={Niki} alt="" srcset=""/>
                <h5 class="text-center">Niki Zefanya</h5>
                <div class="logout">
                    <Link to="/register">
                            <i class="bi bi-box-arrow-right"></i>
                            <p class="ms-1">Logout</p>
                    </Link>
                </div>
            </header>
            <ul>
                <a href="">
                    <li>Explore</li>
                </a>
                <a href="">
                    <li>History</li>
                </a>
                <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <li>Add Book</li>
                </a>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar