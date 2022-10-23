import React from 'react';
// import NavContent from '../../Components/NavbarContent';
import '../../Style/Layout/layout.css'
import imgAuth from '../../assets/unsplash.svg'

const Auth = (props) => {
  const {children} = props
  return (
    <div className='layout-wrapper'>
      <div className='left-section'>
        <div className='title-left-top'>Book is a window to the world</div>
        <div class="title-left-bottom fixed-bottom">Photo by Mark Pan4ratte on Unsplash</div>
      </div>
      <div className='right-section'>
        {children}
      </div>
    </div>
  )
}

export default Auth