import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../../Style/Components/card.css';

const Cards = (props) => {
  const { img, title, subtitle } = props
  return (
    <div className='card-wrapper '>
    <Card style={{ width: '18rem' }} className='card w-30 rounded-4'>
      {/* <Link to={`/detail-content/${id}`}> */}
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <h5 className='text-center fw-bolder'>{title}</h5>
            <p className=''>
              {subtitle}
            </p>
        </Card.Body>
      {/* </Link> */}
    </Card>
    </div>
  )
}

export default Cards