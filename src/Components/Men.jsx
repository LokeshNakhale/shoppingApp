import React, { useEffect, useState } from 'react'
import MenDetails from './MenDetails'
import { Link } from 'react-router-dom'

const Men = ({addToCart ,log}) => {
  

  let arr ='https://fakestoreapi.com/products'
  const [data, setData] = useState([])
  const [men, setMen] = useState(false)
  const [mendetail, setMendetail] = useState([])


 


  useEffect(()=>{
    const getApi = async()=>{
      let value= await fetch(arr)
      let convertedVal= await value.json()
      setData(convertedVal.slice(0,11))
    }
    getApi()
   },[])
   
   const change=(item)=>{
    setMen(!men)
    setMendetail(item)
   }

   const close=()=>{
     setMendetail([])
    setMen(false)
   }
  return (
    <>
    <div id="men">
   {men ?  <MenDetails mendetail={mendetail} onClose={close} />:''}
    <div id="menContener">
    {data.map((item, index)=>(
       <div  id="menCard">
        <div id="image">
          <img src={item.image} alt="" />
        </div>
        <h1> {item.title} </h1>
        <p>Rs {item.price}0</p>
        <div className="card-btn">
          <button onClick={()=>change(item)} >View More</button>
            {log ? (<button onClick={() => addToCart(item)}>Add to Cart</button>
                  ) : (
                  <button style={{ background: 'red' }} > <Link  style={{background:'red'}} to='/Singin' >Add to card</Link> </button>
                  )}
        </div>
      </div>
    ))}
     
    </div>
    
    </div>
    <div className="men-footer">
        <h1>  </h1>
    </div>
    </>
  )
}

export default Men
