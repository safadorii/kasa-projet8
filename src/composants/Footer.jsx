import React from 'react'
import '../Assets/css/Footer.css'
import footerlogo from '../Assets/images/D_Footer.png'
const Footer = () => {
  return(
      <footer className='footer'>
          <img src={footerlogo} alt='logo-kasa' className='footer_logo' />
          <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
      </footer>
  )
}

export default Footer;
