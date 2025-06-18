
import { Link } from 'react-router-dom'
import img1 from '../assets/woImg1.webp'

const Product = () => {
  return (
    <>
      <div id="product">
        <h1>Mens Section</h1>
        <div className='block' id="men">
            <div className="card-contener">
                <div className="card">
                    <img src='/Mimages/menC1.jpg' alt="" />
                </div>
                <div className="card">
                  <img src='/Mimages/menC2.avif' alt="" />
                </div>
                <div className="card">
                  <img src='/Mimages/menC3.avif' alt="" />
                </div>
                <div className="card">
                  <img src='/Mimages/menC4.avif' alt="" />
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
                  <img src={img1} alt="" />
                </div>
                <div className="card">
                  <img src="/WoImg/WoImg2.webp" alt="" />
                </div>
                <div className="card">
                  <img src="/WoImg/WoImg3.webp" alt="" />
                </div>
                <div className="card">
                  <img src="/WoImg/WoImg4.webp" alt="" />
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



