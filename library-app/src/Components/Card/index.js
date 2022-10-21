import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../Style/Components/card.css';

const Cards = (props) => {
  const { img, title, subtitle } = props
  return (
    <div className='card-wrapper '>
    <Card style={{ width: '20rem' }} className='card w-30 rounded-4'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <h5 className='text-center fw-bolder'>{title}</h5>
        <p className=''>
          {subtitle}
        </p>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards