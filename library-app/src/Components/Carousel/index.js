import React from 'react';
import spiderman from '../../assets/komik-spiderman.png';
import buku from '../../assets/buku-bodo-amat.png';
import boruto from '../../assets/komik-naruto.png';
import '../../Style/Components/carousel.css'
// Or for ES2015 module
import Flickity from 'react-flickity-component'

const flickityOptions = {
  initialIndex: 1,
  wrapAround: true
}

function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >

      <div class="gallery-cell">
        <img src={spiderman} alt="spiderman" srcset="" />
        <div className="position-absolute top-50 start-50 translate-middle text-carousel">
          <h4 className="text-center"><u>Marvel : The Amazing Fantasy Spiderman</u></h4>
          <p className="text-center">Stan Lee</p>
        </div>
      </div>

      <div class="gallery-cell">
        <img src={buku} alt="buku" srcset="" />
        <div className="position-absolute top-50 start-50 translate-middle text-carousel">
          <h4 className="text-center"><u>Sebuah Seni Untuk Bersikap Bodo Amat</u></h4>
          <p className="text-center">Mark Manson</p>
        </div>
      </div>

      <div class="gallery-cell">
        <img src={boruto} alt="boruto" srcset="" />
        <div className="position-absolute top-50 start-50 translate-middle text-carousel">
          <h4 className="text-center"><u>Boruto: Naruto Next Generations</u></h4>
          <p className="text-center ">Mikio Ikemoto</p>
        </div>
      </div>
    </Flickity>
  )
}

export default Carousel