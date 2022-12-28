import './Footer.css'
import React from 'react'

export default function Footer() {
  return (
    <div className='Footer'>
        <div className='icon-container'>
            <i class="Footer-icon fa-brands fa-whatsapp"></i>
            <i class="Footer-icon fa-brands fa-paypal"></i>
            <i class="Footer-icon fa-brands fa-youtube"></i>
            <i class="Footer-icon fa-brands fa-facebook"></i>
            <i class="Footer-icon fa-regular fa-envelope"></i>  
        </div>
        <div className='copy-text'>
            <p>تمامی حقوق محفوظ است <i class="fa-regular fa-copyright"></i></p>
        </div>
    </div>
  )
}
