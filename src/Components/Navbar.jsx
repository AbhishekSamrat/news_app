import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { item } from '../Newsbox'



const Navbar = ({setdat,cart}) => {
  const location = useLocation()
 const navigate = useNavigate()
  const [searchitem, setsearchitm] = useState("")

  const filterbycatgry = (category)=>{
    const elmnt = item.filter((prdct)=>prdct.category === category)
    setdat(elmnt)
    
  }


const handlesubmit = (e)=>{
   e.preventDefault()
   navigate(`/search/${searchitem}`)
   setsearchitm("")
}
  return (
 <>
 <header className='sticky-top'>

{
  location.pathname == "/" &&
  (
    <div className='col-lg-12'>
    <div className='navbar-wrapper '>
    <div className='items'> <Link to={"/"} className='brand' style={{color:'black',fontWeight:"800",width:'70px',height:'70px',background:'white',padding:'10px'}}>ABC NEWS</Link></div>
    <div className='items' onClick={()=>setdat(item)}>Home</div>
    <div className='items' onClick={()=>filterbycatgry("general")}>General</div>
    <div className='items' onClick={()=>filterbycatgry("business")}>Business</div>
    <div className='items' onClick={()=>filterbycatgry("sport")}>Sport</div>
    <div className='items' onClick={()=>filterbycatgry("science")}>Science</div>
    <div className='items' onClick={()=>filterbycatgry("health")}>Health</div>
    <div className='items' onClick={()=>filterbycatgry("environment")}>Environment</div>
    <div className='items' onClick={()=>filterbycatgry("technology")}>Technology</div>
    
    <div className='items' >  <form className='search' onSubmit={handlesubmit}>
 <input type='text' value={searchitem} onChange={(e)=>setsearchitm(e.target.value)} placeholder='explore news..'></input>
 </form></div>
  
    </div>
 
    </div>
  

     
  )
}


 </header>
 
 </>
  )
}

export default Navbar