import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { listBook } from '../../Data';
import '../../Style/Components/card.css';

const Cards = () => {
  const [books] = useState(listBook)

  return (

    <div className='card-wrapper '>

      {books.map((book) => {
        return (

          <Card style={{ width: '18rem' }} className='card w-30 rounded-4'>
            <Link to={'/detail-content/' + book.bookId}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                  <h5 className='text-center fw-bolder'>{book.title}</h5>
                  <p className=''>
                    {book.subtitle}
                  </p>
              </Card.Body>
            </Link>
          </Card>

        )
      })}

    </div>
  )
}

export default Cards