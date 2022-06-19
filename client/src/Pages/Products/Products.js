import React, { useEffect, useState } from 'react'
import './Products.scss'
import Axios from 'axios'
import Footer from '../../Footer/Footer'


function Products() {

    const[products,setProducts] = useState([])

    useEffect(() => {
      Axios.get("http://localhost:4000/api/client/products/view-products").then((response)=>{
          setProducts(response.data)
      })
    }, [])
    

  return (
    <div className='productsWrapper'>
        <h1>Shop</h1>
        <div className="products">
            {products.map((val, key)=>{
                return(
                   <div className='product'>
                       <img src="" alt="" />
                       <div className="details">
                            <p>{val.name}</p>
                            <p>{val.brand}</p>
                            <h4>Price: {val.price}</h4>
                           
                       </div>                      
                        <button className='btn-add'>Buy</button>
                       
                   </div>
                )
            })}
        </div>
        <Footer/>
    </div>
  )
}

export default Products