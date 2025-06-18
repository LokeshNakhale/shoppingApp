import { useState } from "react";
import "./Pages.css";

const Home = () => {

  const [iamges, setIamges] = useState([
    {img:'/Movepng/movImg1.png'},
    {img:'/Movepng/movImg2.png'},
    {img:'/Movepng/movImg3.png'},
    {img:'/Movepng/movImg4.png'},
    {img:'/Movepng/movImg5.png'},
    {img:'/Movepng/movImg6.png'},
    {img:'/Movepng/movImg1.png'},
    {img:'/Movepng/movImg2.png'},
    {img:'/Movepng/movImg3.png'},
    {img:'/Movepng/movImg4.png'},
    {img:'/Movepng/movImg5.png'},
    {img:'/Movepng/movImg6.png'},
  ])
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
            <source src="/videos/Video.mp4" />
          </video>
        </div>
      </div>
      <div id="home2">
        <h2>Welcome to Zisbuy Fasion</h2>
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
        <div id="move">
          <div className="moving">
         {iamges.map((items)=>(
           <>
           <h1>BRANDS </h1>
          <img src={items.img} alt="" />
          </>
          ))}
          </div>
         
        </div>
      </div>

      <div id="home3">
      <div id="home3-cont">
          <div className="h3-img">
            <img src="/Movepng/home3png.png" alt="" />
            
          </div>
        <div className="h3-cont">
          <img id="phoneImg" src="/Movepng/home3png.png" alt="" />
          <h1>PADAY</h1>
          <h1>Sale Now</h1>
          <p>Spend minimal $100 get 30% off
            voucher code for your next purchase</p>
          <p> <b>1 June - 10 June 2025</b> </p>
        <p>*Terms & Conditions apply</p>
          <button>Shop now</button>
        </div>
      </div>
      </div>
      <footer class="main-footer">
  <div class="footer-content">
    <p>&copy; 2025 PADYA. All rights reserved.</p>
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
