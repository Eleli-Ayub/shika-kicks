import React from 'react'
import './Type.scss'

function brand({ brandImage, type }) {
  return (
    <div className='brandWrapper'>
      <img src={brandImage} alt="" />
      <h3>{type}</h3>
    </div>
  )
}

export default brand