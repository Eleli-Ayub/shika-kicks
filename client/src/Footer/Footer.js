import React from 'react'
import './Footer.scss'

import facebookIcon from './facebook.png'
import instagramIcon from './instagram.png'
import twitterIcon from './twitter.png'
import phoneIcon from './phone.png'

function Footer() {
  return (
    <div className='footerWrapper'>
        <ul>
            <h4>Social Links</h4>
            <li><img src={facebookIcon} alt="" />Facebook</li>
            <li><img src={instagramIcon} alt="" />Instagram</li>
            <li><img src={twitterIcon} alt="" />Twitter</li>
            <li><img src={phoneIcon} alt="" />Call/WhatsApp</li>
        </ul>
        <ul className='brands'>
            <h4>Brands</h4>
            <ul>
                <li>Nike</li>
                <li>Balenciage</li>
                <li>Jordans</li>
                <li>Antena</li>
                <li>Adidas</li>
                <li>Under Armor</li>
                <li>Vans</li>
                <li>Yezees</li>
                <li>Vans</li>
                <li>Yezees</li>
            </ul>
        </ul>
        <ul>
            <h4>Family</h4>
            <li>Men</li>
            <li>Women</li>
            <li>Unisex</li>
            <li>Kids</li>
        </ul>
        <ul className='logos'>
            <li><img className='logo' src="" alt="" /><span>Shika Kicks</span></li>
            <li><img className='logo' src="" alt="" /><span>Eleli Afrika</span></li>
        </ul>
    </div>
  )
}

export default Footer