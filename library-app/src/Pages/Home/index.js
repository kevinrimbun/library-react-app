import React from 'react';
import Carousel from '../../Components/Carousel';
import Navbar from '../../Components/Navbar';
import Cards from '../../Components/Card';
// import Sidebar from '../../Components/Sidebar';
import spiderman from '../../assets/komik-spiderman.png';
import buku from '../../assets/buku-bodo-amat.png';
import boruto from '../../assets/komik-naruto.png';
import '../../Style/pages/home.css'

const Home = () => {
  const listBook = [
    {
      img : buku,
      title : "Sebuah Seni Untuk bersikap Bodo Amat",
      subtitle :"Some quick example text to build on the card title and make up the bulk of the card's content."

    },
    {
      img : boruto,
      title : "Boruto: Naruto Next Generations",
      subtitle : "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      img : spiderman,
      title : "The Amazing Spiderman",
      subtitle : "Some quick example text to build on the card title and make up the bulk of the card's content."
    }]

    return (
      <div>
        <Navbar className='container-fluid' />
        <Carousel />
        <div class="text-list">
          <h4>List Book</h4>
        </div>

        <div className='card-homepage'>
        {listBook.map(book => {
          return (
            <Cards 
                img={book.img}
                title={book.title}
                subtitle={book.subtitle}
              />
            )
          })}
        </div>
      </div>
  )
}

export default Home