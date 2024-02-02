
import React, { useState } from 'react'
import '../Footer/Footer.css'
import { IoIosArrowForward } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import imgTitle from '../../component/Assets/images-removebg-preview.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footdiv">
    <div className="footer">
      <div className="foot footone">
    <div className="imgText">
    <div className="cicle">
      <img src={imgTitle} className='imgNav'  />
        </div> 
    <p className='footTitle'>Ewneta Weyzero</p>
      </div>  

       <div className="textonly">
        <p className='footDesc'>
        Weyzero is a webapp that gather as much information as possible about potential maids, 
        adult care, female tutors, housekeepers, Waitress and Private nurses including personal information, education,
         experience and work history, so that Employers can make an educated and informed hiring decision.
        </p>
       </div>

      </div>
      <div className="foot foottwo">
    <h3>
    Quick Link
    </h3>
    <ul className="ulfoot">
      <li className="lifoot"> <IoIosArrowForward className='iconfoot' />  <Link to='/' >Home</Link>  </li>
      <li className="lifoot"> <IoIosArrowForward className='iconfoot' /> <Link to='/serv' >Service</Link>   </li>
      <li className="lifoot"> <IoIosArrowForward className='iconfoot' /> <Link to='/employe' >Employees</Link>   </li>
      <li className="lifoot"> <IoIosArrowForward className='iconfoot' /> <Link to='/contact' >Contact</Link>  </li>
      <li className="lifoot"> <IoIosArrowForward className='iconfoot' /> <Link to='/register' >Register</Link>  </li>
      <li className="lifoot"> <IoIosArrowForward className='iconfoot' />  <Link to='/login' >Login</Link>   </li>
    </ul>
      </div>
      <div className="foot footthree ">
   
    <h3>
    Legals
    </h3>
    <ul className="ulfoot">
      <li className="lifoot"> <IoIosArrowForward className='iconfoot' />  <Link to='/term'>Terms and Conditions</Link>  </li>
      <li className="lifoot"> <IoIosArrowForward className='iconfoot' /> <Link to='/term' >Privacy Policy</Link>   </li>
      
    </ul>
      </div>
      <div className="foot footfour">
      <h3>
      Contact Us
      </h3>

<div className="iconall">

<div className="emailfoot">    
  <a href = "mailto: abelahabtamu1@gmail.com"> <MdOutlineEmail className='iconMsgfoot' />  abelahabtamu1@gmail.com </a>
  </div> 

<div className="phonefoot">
 <a  href="tel:+251930104785"><FaPhoneAlt className='iconfoot iconfootphone' /> +251930104785 </a>  
 </div>

 <div className="locationfoot">
 <FaLocationDot className='iconfoot' /><p>Around Ajip, Jimma</p>
    </div> 




<div className="iconsfoot">

<FaFacebookF  className="iconssfoot" />
<FaTelegram  className="iconssfoot" />
<FaInstagram  className="iconssfoot" />

</div>
</div>

  

      </div>


    </div>
    <hr />
    <div className="copy">
      <p>
      2023 © Copyright Ewneta. All Rights Reserved.
      </p>
      <p>
      Powered By Ewneta Technologies PLC.
      </p>
    </div>
    
      </div>
  )
}

export default Footer