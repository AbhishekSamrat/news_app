import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart,setcart}) => {
  console.log(setcart)
  const clear=()=>{
    setcart("")
  }


  return (
    <>
    <div className='container my-5' style={{width:"54%"}}>
 

    <div className='row'>

    {

      cart.map((el)=>{
      return(
       <>
<div className='col-lg'>
<div class="cardd mb-5 mt-5"  style={{width:"600px"}}>
<div className="row g-0">
 <div className="col-md-4 ">
   <img  src={el.imgsrc} className='img-fluid rounded-start'></img>
 </div>
 <div className="col-md-8">
   <div className="card-body " style={{width:"100%"}}>
     <h5 className="card-title text-black">{el.title}</h5>
     <p className="card-text">{el.description}</p>

     <button className='btn btn-warning' >Buy Now</button>
   </div>
 </div>
</div>

</div>
</div>

       </>
      )
      
 })}

    </div>


    </div>

 
    </>
  )
}

export default Cart