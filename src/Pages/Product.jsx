
import { Link } from 'react-router-dom'
import imgM1 from '../assets/Mimages/menC1.jpg'
import imgM2 from '../assets/Mimages/menC2.avif'
import imgM3 from '../assets/Mimages/menC3.avif'
import imgM4 from '../assets/Mimages/menC4.avif'

import imgW1 from '../assets/WoImg/woImg1.webp'
import imgW2 from '../assets/WoImg/woImg2.webp'
import imgW3 from '../assets/WoImg/woImg3.webp'
import imgW4 from '../assets/WoImg/woImg4.webp'


const Product = () => {
  return (
    <>
      <div id="product">
        <h1>Mens Section</h1>
        <div className='block' id="men">
            <div className="card-contener">
                <div className="card">
                  <img src={imgM1} alt="" />
                </div>
                <div className="card">
                  <img src={imgM2} alt="" />
                </div>
                <div className="card">
                  <img src={imgM3} alt="" />
                </div>
                <div className="card">
                  <img src={imgM4} alt="" />
                </div>
            </div>
           <div className="button">
            <button> <Link to='/Men'>View more</Link> </button>
           </div>
        </div>
        <h1>Womens Section</h1>
        <div className='block' id="women">
             <div className="card-contener">
                <div className="card">
                  <img src={imgW1} alt="" />
                </div>
                <div className="card">
                  <img src={imgW2} alt=""/>
                </div>
                <div className="card">
                  <img src={imgW3} alt="" />
                </div>
                <div className="card">
                  <img src={imgW4} alt="" />
                </div>
            </div>
           <div className="button">
              <button> <Link > Not Available </Link> </button>
           </div>
        </div>
       
      </div>

      
    </>
  )
}



export default Product



