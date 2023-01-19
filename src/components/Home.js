import React from 'react';
import './Home.css';
import Navbar from './Navbar';

function Home() {
  return (
      <div className='about-us'>
         <div className="homes">
      
              <div className='home'>
                  <p> <br /> 
                  <span style={{color: 'orange'}}> Why Jua Bei? </span>    <br />
                  In order to make the best decision, it’s good to have all the facts at your fingertips. We are one of the world’s best price and product comparison services, with one single goal – to guide consumers to smarter buying decisions.<br />
                 </p>
             </div>

              <div className='image'>
                 <img  src="../icons/product.webp" />
             </div>
        </div>
         <div className='more'>
              <div className='image'>
                <img id='img' src="../icons/newsletter-illustration-188x102px.png" />
              </div>

              <div>
               <h3>Get smart shopping tips by signing up to our newsletter!</h3>
               <form className='letter'>
              <input type="email" placeholder="your email address" />
              <button className='button'>Subscribe</button>
              </form>
              </div>
         </div> 
    

      </div>
  );
}

export default Home;
