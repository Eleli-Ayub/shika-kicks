import React from 'react'
import './Product.scss'

function Product({ name, image, colors, sizes, price, desc }) {
  return (
    <div className='productWrapper'>
        <img src={image} alt="" />
        <div className="details">
            <h1>Nikes</h1>
            <p className='desc'><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto repudiandae molestiae dolores cum quo incidunt iste, blanditiis suscipit odit. Nostrum repudiandae similique velit voluptatibus. Necessitatibus error ducimus consequatur eaque incidunt veniam! Est reprehenderit nobis, optio velit doloribus ratione praesentium laboriosam cumque natus illo, vitae fuga eos, neque omnis hic.</i></p>
            <p><i><b>Colors: </b>{["Black, ", "Blue, ", "Red, ", "Green." ]}</i></p>
            <p><i><b>Sizes</b>{["35,", "36, ","39, ", "40, ","42,"]}</i></p>
            <h2><b><i>Ksh: 4,500</i></b></h2>
            <button className="add">Buy</button>
        </div>

    </div>
  )
}

export default Product