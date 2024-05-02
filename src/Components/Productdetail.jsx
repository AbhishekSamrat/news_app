import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { item } from '../Newsbox'
import Products from '../Products'


const Productdetail = ({cart,setcart}) => {
  const {id} = useParams()
  const [products,setproducts] = useState({})
  const [relateditem,setrelateditem] = useState([])
  useEffect(()=>{
const filterproduct = item.filter((products) => products.id == id )
setproducts(filterproduct[0])
const relateditem = item.filter((p)=> p.category === products.category)
console.log(products.category)
setrelateditem(relateditem)
  },[id,products.category])


  
  return (
    <>
    <div className='container con'>
    <div className='img'>
    <img src={products.imgsrc} alt=''></img>
    </div>
    <div className='text-center'>
    <h5 className="card-title">{products.title}</h5>
    <p className="card-text">{products.description}</p>
    <button className='btn btn-primary mx-4'>{products.price}₹</button>
    <button className='btn btn-warning' >Read More</button>
    </div>
    
    </div>
    <h1 className='text-center m-5'>Related News</h1>
    <Products item = {relateditem}  cart={cart} setcart={setcart}></Products>
    </>
  )
}

export default Productdetail