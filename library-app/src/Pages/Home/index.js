import React from 'react';
import Carousel from '../../Components/Carousel';
import Navbar from '../../Components/Navbar';
import Cards from '../../Components/Card';
import '../../Style/pages/home.css';
import '../../Style/Components/navbar.css'

const Home = () => {

  return (
    <div>
      <div className='fixed-top'>
        <Navbar  />
      </div>
      <div className='carousel'>
        <Carousel />
      </div>
      <div class="text-list">
        <h4>List Book</h4>
      </div>

      {/* <div className='card-homepage'> */}
        <Cards/>
      {/* </div> */}

    </div>

  )
}

export default Home