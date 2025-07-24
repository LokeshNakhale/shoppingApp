
import "./Pages.css";
import h2img from "../assets/Movepng/home2-1.jpg"
import h2img2 from "../assets/Movepng/home2-1img.jpg"

import Menpng from '../assets/Movepng/home3png.png'
import Tshirt from "../assets/Movepng/T-shirt.avif"
import shirt from "../assets/Movepng/Shirt.jpg"
import pants from "../assets/Movepng/pants.jpeg"


import vid from '../assets/videos/Video.mp4'
import { Link } from "react-router-dom";
const Home = () => {


  return (
    <>
     <div id="loader">
        <h3 className="slide" >Welcome</h3>
        <h3 className="slide" > To </h3>
        <h3 className="slide" >Zisbuy</h3>
    </div>
      <div id="home1">
        <div id="video">
          <video autoPlay muted loop>
            <source src={vid} />
          </video>
        </div>
      </div>
      <div id="home2">
        <h2>Welcome to Zisbuy Fashion</h2>
        <div className="h2-cont">
          <div className="h2-info">
            <p>
              Welcome to Zusbuy Fashion – where tradition meets innovation in the
              world of style. We are more than just a clothing brand; we are a
              movement that celebrates individuality, culture, and creativity.
              At Gara Fashion, our mission is to empower every person to express
              their true self through clothing that speaks volumes. Our
              collections are inspired by timeless ethnic designs blended with a
              touch of modern elegance, making every outfit suitable for both
              grand occasions and everyday wear. From luxurious fabrics to
              intricate detailing, each garment is a result of thoughtful
              craftsmanship and a passion for excellence. Whether you're
              searching for something bold and glamorous or subtle and
              sophisticated, Gara Fashion offers a wide variety of options that
              cater to all tastes . We believe that fashion should not just be
              worn, but lived – and that’s why we focus on comfort, confidence,
              and creativity in every stitch. Step into the world of Gara
              Fashion and discover styles that reflect who you are – strong,
              stylish, and original. Join our fashion family and let your
              wardrobe tell your story.
            </p>
          </div>
        </div>
       
      </div>
        
      <div id="home3">
      <div id="home3-cont">
          <div className="h3-img">
            <img src={Menpng} alt="" />
            
          </div>
        <div className="h3-cont">
          <img id="phoneImg" src="/Movepng/home3png.png" alt="" />
          <h1>PAYDAY</h1>
          <h1>Sale Now</h1>
          <p>Spend minimal $100 get 30% off
            voucher code for your next purchase</p>
          <p> <b>1 June - 10 June 2025</b> </p>
        <p>*Terms & Conditions apply</p>
          <Link to='/Product' >Shop Now</Link>
        </div>
        {/* phone */}
        <div className="h3-cont-phone"> 
       <img src={Menpng} id="phoneImg" alt="" />
          <h1>PAYDAY</h1>
          <h1>Sale Now</h1>
          <p>Spend minimal $100 get 30% off
            voucher code for your next purchase</p>
          <p> <b>1 June - 10 June 2025</b> </p>
        <p>*Terms & Conditions apply</p>
           <Link to='/Product' >Shop Now</Link>
        </div>
      </div>
      </div>

      <div id="home2-1">
            <div className="h2-1cont">
              <div id="h2-1cart" className="h2-1cart">
                      <button>About Us</button> 
                      <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, amet? </h2>
                      <p>lss Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, incidunt quis enim corrupti veniam aperiam. Quam debitis ipsam officiis nesciunt ipsum ex provident corrupti harum fugit itaque illum explicabo repellendus, reiciendis omnis incidunt! ss</p>
              </div>
              <div className="h2-1cart">
                <img src={h2img} alt="" />
                
              </div>
              <div className="h2-1cart">
                <img src={h2img2} alt="" />
                
              </div>
            </div>
          </div>

    <div id="home4">
      <div className="elem">
        <img src={shirt} alt="" />
        <div className="text-div">
          <h1>Shirts </h1>
          <h1>Shirts </h1>
        </div>
        <img src={shirt} alt="" />
      </div>  
      <div className="elem">
        <img src={Tshirt} alt="" />
        <div className="text-div">
         <h1>T-shirts </h1>
          <h1>T-Shirts </h1>
        </div>
        <img src={Tshirt} alt="" />
      </div>  
      <div className="elem">
        <img src={pants} alt="" />
        <div className="text-div">
           <h1>Pants </h1>
          <h1>Pants </h1>
          
        </div>
        <img src={pants} alt="" />
      </div>  
      </div>      

      <footer class="main-footer">
  <div class="footer-content">
    <p>&copy; 2025 PAYDAY. All rights reserved.</p>
    <div class="footer-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Contact</a>
    </div>
  </div>
</footer>
    </>
  );
};

export default Home;
