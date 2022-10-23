import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavContent from '../../Components/NavbarContent';
import { listBook } from '../../Data';
import '../../Style/pages/detailcontent.css'
import ModalDelete from '../../Components/ModalDelete';

const DetailContent = () => {
  const {bookId} = useParams();
  const [book] = useState(listBook[bookId-1]);

  return (
    <div>
      <div>
        <img src={book.img} className='img-content' alt='image-banner'/>
        <div className='fixed-top'>
          <NavContent className='nav-content'/>
        </div>

        <div className='cover-content'>
          <div className='category'>
            <button>
              {book.category}
            </button>
            <h2>{book.title}</h2>
            <h5>{book.release}</h5>
          </div>
          <div className='availability'>
            <div className='text-availability'>{book.availability}</div>
          </div>
          <img src={book.imgV} className='img-vertical' alt='image-vertical'/>
        </div>

        <div className='d-flex paratext-btn'>
          <div className='paragraph-content'>
            <p>{book.paragraph}</p>
          </div>

          <div className='btn-borrow'>
            <ModalDelete buttonName='Borrow' bookTitle={book.title} message='Berhasil Dipinjam' modalTitle='Borrow Book'/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DetailContent