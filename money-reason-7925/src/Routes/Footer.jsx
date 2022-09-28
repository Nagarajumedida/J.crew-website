import { ClassNames } from '@emotion/react'
import React from 'react'
import {BsTwitter,BsFillTelephoneFill,BsPinterest} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {SiInstagram} from "react-icons/si"
import {FaFacebookF} from "react-icons/fa"
import {AiFillLinkedin,AiFillYoutube} from "react-icons/ai"



import "./Footer.css"

 const Footer = () => {
  return (
    <div className='footer'>
            <div>
                <hr />
            </div>
            
            <div className='contact'>
                <div className='contact1'>
                    <BsTwitter/>
                    <p>@jcrew_help</p>
                </div>
                <div className='contact1'>
                    < BsFillTelephoneFill/>
                    <p>1434 385 5775</p>
                </div>
                <div className='contact1'>
                    <MdEmail/>
                    <p>Email Us</p>
                </div>
            </div>
            {/* footer2 */}
            <div className='footer1'> 
            <div className='footer2'>
              <div className='footer3'>
                    <h1>Help</h1>
                    <p>Customer Service</p>
                    <p>Returns & Exchanges</p>
                    <p>Shipping</p>
                    <p>International Orders</p>
                    <p>Contact Us</p>
                 </div>

                 <div className='footer3'>
                <h1>Quick Links</h1>
                <p>Find a Store</p>
                <p>Offers & Promotions</p>
                <p>My Favorites</p>
                 </div>

                 <div className='footer3'>
                    <h1>About J.Crew</h1>
                    <p>Our Story</p>
                    <p>Careers</p>
                    <p>Social Responsibilty</p>
                    <p>California Transparamcy Act/Modern Slavery Act</p>
                    <p>Investors Relations</p>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>California Do Not Sell My Personal Information</p>
                    <p>Diversity, Equity and Inclusion at J.Crew Group</p>
                 </div>

                 <div className='footer3'>
                    <h1>Like Being First?</h1>
                    <p className='news'>Get can't-miss style news, before everybody else.</p>
                    <div className='footer4'>
                        <input type="text" placeholder='Enter your  email'/>
                        <button>SIGN UP</button>
                    </div>
                 </div>
            </div>

            <div className='social-icons'>
                <SiInstagram size={30} style={{cursor:'pointer'}}/>
                <FaFacebookF size={30} style={{cursor:'pointer'}}/>
                <BsTwitter size={30} style={{cursor:'pointer'}}/>
                <AiFillLinkedin size={30} style={{cursor:'pointer'}}/>
                <BsPinterest size={30} style={{cursor:'pointer'}}/>
                <AiFillYoutube size={30} style={{cursor:'pointer'}}/>
            </div>

            <div>
                <p>@2002 J.Crew</p>
            </div>
    </div>    
    </div>
  )
}
export default Footer;
