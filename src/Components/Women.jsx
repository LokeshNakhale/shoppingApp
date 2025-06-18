import React, { useState } from 'react'
import WomenDetail from './WomenDetail'

const Women = () => {
    const [data, setData] = useState(
      [
  {
    name: "banarasi",
    price: '24500',
    discount_available: '12%',
    description: 'Opulent silk saree from Varanasi with gold & silver zari and floral motifs.',
    image: '/WoImg/woImg1.webp',
    rating: 4.8
  },
  {
    name: "kanchi",
    price: '18000',
    discount_available: '12%',
    description: 'Pure Kanchipuram silk saree with rich zari temple borders and contrast pallu.',
    image: '/WoImg/WoImg2.webp',
    rating: 4.7
  },
  {
    name: "pocham",
    price: '8500',
    discount_available: '12%',   
     description: 'Pochampally ikkat saree from Telangana featuring vibrant geometric dye patterns.',
    image: '/WoImg/WoImg3.webp',
    rating: 4.5
  },
  {
    name: "sambalpuri",
    price: '6000',
    discount_available: '12%',  
      description: 'Handwoven Sambalpuri ikat saree from Odisha with traditional motifs like shankha & chakra.',
    image: ' /WoImg/WoImg4.webp',
    rating: 4.6
  },
  {
    name: "baluchari",
    price: '12000',
    discount_available: '12%',
    description: 'Silk Baluchari from West Bengal depicting mythological scenes on the pallu.',
    image: ' /WoImg/WoImg5.webp',
    rating: 4.7
  }


    ])

    const [men, setMen] = useState(false)
    const [mendetail, setMendetail] = useState([])


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
   {men ?  <WomenDetail mendetail={mendetail} onClose={close} />:''}
    <div id="menContener">
    {data.map((item, index)=>(
       <div  id="menCard">
        <div id="image">
          <img src={item.image} alt="" />
        </div>
        <h1> {item.name} </h1>
        <p>Rs {item.price}0</p>
        <div className="card-btn">
          <button onClick={()=>change(item)} >View More</button>
          {/* <button>Place Order</button> */}
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

export default Women
