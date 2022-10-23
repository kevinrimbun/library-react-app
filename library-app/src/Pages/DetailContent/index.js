import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavContent from '../../Components/NavbarContent';
import { listBook } from '../../Data';

const DetailContent = () => {
  const [bookId] = useParams();
  const [book] = useState(listBook[bookId-1])
  return (
    <div>
      <Link to="/" />
        <NavContent />
      <Link/>
      <img src={book.img} />
    </div>

  )
}

export default DetailContent