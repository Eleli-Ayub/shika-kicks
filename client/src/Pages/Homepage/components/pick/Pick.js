import React from 'react'
import './Pick.scss'

function Pick({ pickImage, pickPrice, pickOne, pickTwo, pickThree, pickFour, priceOne, priceTwo, priceThree, priceFour }) {
  return (
    <div className='pickWrapper'>
        <div className="topPick">
            <img src={ pickImage } alt="" />
            <h3>{pickPrice}</h3>
        </div>
        <ul>
            <li><img src={pickOne} alt="" /><h5>{priceOne}</h5></li>
            <li><img src={pickTwo} alt="" />{priceTwo}</li>
            <li><img src={pickThree} alt="" />{priceThree}</li>
            <li><img src={pickFour} alt="" />{priceFour}</li>
        </ul>
    </div>
  )
}

export default Pick