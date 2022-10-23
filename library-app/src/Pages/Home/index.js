import React from 'react';
import Carousel from '../../Components/Carousel';
import Navbar from '../../Components/Navbar';
import Cards from '../../Components/Card';
// import listBook from '../../Data/index.json';
import '../../Style/pages/home.css';
import '../../Style/Components/navbar.css'

const Home = () => {

  return (
    <section className='home-section'>
    <div>
      {/* <Sidebar/> */}
      <Navbar className='container-fluid' />
      <Carousel />
      <div class="text-list">
        <h4>List Book</h4>
      </div>

      <div className='card-homepage'>
        <Cards/>
      </div>

      {/* <div className='card-homepage'>
        {listBook.map(book => {
          return (
            <Cards 
                img={book.img}
                title={book.title}
                subtitle={book.subtitle}
              />
            )
        })}
      </div> */}

    </div>

    </section>
  )
}

export default Home