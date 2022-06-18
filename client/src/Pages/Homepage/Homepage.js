import React from 'react'
import Brand from './components/brand/Type'
import Pick from './components/pick/Pick'
import './Homepage.scss'
import titlebg from './headerbg.jpg'
import facebookIcon from './facebook.png'
import instagramIcon from './instagram.png'
import twitterIcon from './twitter.png'

function Homepage() {
  return (
    <div className='homePage'>
        <div className="topComponent">
            <img src={titlebg} alt="title background" />
            <div className="titles">
                <div className="title"><h4>Shika Kicks</h4></div>
                <ul className='links'>
                   <li><img src={facebookIcon} alt="" /></li>
                   <li><img src={instagramIcon} alt="" /></li>
                   <li><img src={twitterIcon} alt="" /></li>
                   <li></li>
                </ul>
            </div>
        </div>
        <div className="pageLinks">
            <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
                <li>Unisex</li>
            </ul>
        </div>
        <div className="shoeSorts">
            <h1>Explore By Brands</h1>
            <ul>
                <Brand/>
                <Brand/>
                <Brand/>
                <Brand/>
                <Brand/>
                <Brand/>
                <Brand/>
                <Brand/>
                <Brand/>
                <Brand/>
            </ul>
            <h1>Shop For Family</h1>
            <ul>
                <Brand type="Women"/>
                <Brand type="Men"/>
                <Brand type="Unisex"/>
                <Brand type="Kids"/>
                <Brand type="Teens"/>
            </ul>
            <h1>Pick of the week</h1>
            <Pick/>
        </div>
    </div>
  )
}

export default Homepage