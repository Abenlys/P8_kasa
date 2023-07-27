import React from 'react'
import LogoFooter from "../../Assets/logo-footer.svg";
import "./_Footer.scss"

export default function Footer() {
  return (
    <div className='container-footer'>
        <img src={LogoFooter} alt="logo-footer" className='logo' />
        <p className='footer-p'>© 2020 Kasa. All <span>rights reserved</span></p>
    </div>
  )
}
