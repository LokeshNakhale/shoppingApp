import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import { MdShoppingCart } from "react-icons/md";
import Product from './Pages/Product'
import Signin from './Pages/Signin'
import Men from './Components/Men'
import Women from './Components/Women'
// import { useState } from 'react'
import Cart from './Pages/Cart'
import { useEffect, useState } from 'react'
import Login from './Pages/Login';


function App() {
 
const [cart, setCart] = useState([])

const addToCart=(products)=>{

  const isProductExist = cart.find((findItem)=> findItem.id === products.id )

  if(isProductExist){
  const upDateCart =  cart.map((item)=>(
      item.id=== products.id?{...item,quantity:item.quantity+1}:item
    ))
    setCart(upDateCart)
  }else{

    setCart([ ...cart, {...products,quantity:1}]) 
  }
  console.log(cart);
  

  
  
}


const handleInc=(id)=>{
 const incQuantity=  cart.map((item)=>(
   item.id == id? {...item, quantity:item.quantity+1}:item
  ))
  setCart(incQuantity)
}
const  handleDec=(id)=>{
  const decQuantity=  cart.map((item)=>(
   item.id  == id && item.quantity>1 ? {...item, quantity:item.quantity-1}:item
  ))
  setCart(decQuantity)
}



// cart remove 
const handleRemove=(id)=>{
 const updateByFilter = cart.filter((fiterItem)=> fiterItem.id !== id)
 setCart(updateByFilter)
}
const [log, setLog] = useState(false);
useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.length > 0) {
    setLog(true);
  } else {
    setLog(false);
  }
}, []);

const logout=()=>{
  localStorage.removeItem('user')
  setLog(false);
}
  return (
    <>
      <nav>
        <div id="logo">logo</div>
        <div id="navinfo">
          <Link to='/'>Home</Link>
          <Link to='/Product'>Product</Link>
          <Link to='/Card'><MdShoppingCart />{cart.length} </Link>
          
          {log ? <button id='logoutbtn' onClick={logout} >Log Out</button>:<Link to='/Singin'>Sign in</Link>}
        </div>
      </nav>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Card' element={<Cart cart={cart} handleInc={handleInc} handleDec={handleDec} handleRemove={handleRemove}/>} />
      <Route path='/Product/*' element={<Product />} />
      <Route path='/Singin' element={<Signin/>} />
      <Route path='/Men' element={<Men addToCart={addToCart} log={log}  />} />
      <Route path='/Women' element={<Women/> }/>
      <Route path='/Login' element={<Login/>} />
      
    </Routes>

    </>
  )
}

export default App
