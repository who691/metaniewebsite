import React, { useEffect, useState } from 'react'
import './Hero.css'

import imgHero1 from '../../component/Assets/img1.png'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

import EmployeHome from '../EmployeHome/EmployeHome';

import image1 from '../../component/Assets/icons/nurse.png'
import image2 from '../../component/Assets/icons/old-people_3689125-removebg-preview.png'
import image3 from '../../component/Assets/icons/changer_2219870-removebg-preview.png'
import image4 from '../../component/Assets/icons/house keeper.png'
import image5 from '../../component/Assets/icons/teacher_10618283-removebg-preview.png'
import image6 from '../../component/Assets/icons/cleaner_1886856-removebg-preview.png'
import image7 from '../../component/Assets/icons/waiter_6103215-removebg-preview.png'
import image8 from '../../component/Assets/icons/cooker.png'
import image11 from '../../component/Assets/icons/housekeeper_6966743-removebg-preview.png'

import worker1 from '../../component/Assets/worker1.jpg'
import worker2 from '../../component/Assets/worker2.jpg'
import worker3 from '../../component/Assets/worker3.jpg'
import worker4 from '../../component/Assets/worker4.jpg'
import worker5 from '../../component/Assets/worker5.jpg'
import worker6 from '../../component/Assets/worker6.jpg'
import worker7 from '../../component/Assets/worker7.png'
import worker8 from '../../component/Assets/worker8.jpeg'
import avater from '../../component/Assets/avatar-removebg-preview.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Link,useNavigate } from 'react-router-dom';

const Hero = () => {

  const [active,setActive]=useState('first');



  useEffect(()=>{
    window.scrollTo(0,0)
      },[])

    const navigate=useNavigate()
    
      const servicesPart=(serviceName)=>{
    
    navigate('/services' , {state:serviceName} )
    
      }

      const moreServ=()=>{
        navigate('/serv')
      }

      const registerPage=()=>{
        navigate('/register')
      }
const serategnaPage=()=>{
  navigate('/employe')
}

  return (
    <div className='hero'>
<div className="herosec1">

<div className="herostart">

<div className="herotext">
    <p>
    We are helping thousands of families in finding their perfect
    </p>
    <h4>
    WEYZERO
    </h4>

<div className="herobtn">
    <button onClick={registerPage} className='btnhe btnre'>
    Register
    </button>
    <button onClick={serategnaPage} className='btnhe btnse'>
   Search Serategna
    </button>
</div>

</div>

<div className="heroimage">
<img src={imgHero1} alt="" />
</div>

</div>

<div className="herolast">



<div className="conHero1 ">

  <div className="iconheroo">
  <AiFillSafetyCertificate className='iconheros' />
  </div>

  <div className="icontext">

  <h2>
Safe Hire
</h2>
<p>
Hire Safe Only Emebet-Verified Workers
</p>
  </div>

</div>

<div className="conHero1">
<div className="iconheroo">
<FaHandHoldingDollar className='iconheros' />
 
  </div>

  <div className="icontext">

  <h2>
  INSTANT HIRING
</h2>
<p>
We know you're busy, Hire instantly from your computer or smart phone.
</p>
  </div>
</div>

<div className="conHero1">
<div className="iconheroo">

  <FaAward className='iconheros' />
  </div>

  <div className="icontext">

  <h2>
  TRANSPARENT PRICING
</h2>
<p>
No hidden fees. What you see is what you pay.
</p>
  </div>
</div>

</div>

</div>


<div className="herosec2">

<div className="heroserv">
<h2>
Explore Services
</h2>
<hr />
<div className="serviceHero">

<div onClick={()=>servicesPart('maid')} className="conserve">
<img src={image11} className='imgServe' alt="" />
<h4>Maid  </h4>
</div>
<div onClick={()=>servicesPart('privatenurse')} className="conserve">
<img src={image1} className='imgServe' alt="" />
<h4>Private Nurse </h4>
</div>
<div onClick={()=>servicesPart('babysitter')} className="conserve">
<img src={image3} className='imgServe' alt="" />
<h4>Baby Sitter  </h4>
</div>
<div onClick={()=>servicesPart('housekeeper')} className="conserve">
<img src={image4} className='imgServe' alt="" />
<h4>House Keeper </h4>
</div>
<div onClick={()=>servicesPart('tutor')} className="conserve">
<img src={image5} className='imgServe' alt="" />
<h4>Tutor  </h4>
</div>
<div onClick={()=>servicesPart('cleaner')} className="conserve">
<img src={image6} className='imgServe' alt="" />
<h4>Cleaner</h4>
</div>
<div onClick={()=>servicesPart('waitress')} className="conserve">
<img src={image7} className='imgServe' alt="" />
<h4>Waitress   </h4>
</div>
<div onClick={()=>servicesPart('cooking')} className="conserve">
<img src={image8} className='imgServe' alt="" />
<h4>Cooking </h4>
</div>


</div>

<div className="moreservice">

<button onClick={moreServ}>
  More Service
</button>

</div>

</div>


</div>

<div className="herosec3">

<EmployeHome/>

</div>

<div className="herosec4">

<div className="howitwork">
<h2>
How it Works
</h2>
<p>Your are just one step away to contact your Emebet</p>

<div className="findoneicon">

<div className="icon1hero">
 <hr /> <div className="iconherooo"><FaCheck className='iconHero1' /></div> <hr className='iconhrhero' /> <hr className='iconhrheroa' /> 
</div>

<div className="icon1hero">
 <hr /> <div className="iconherooo"><FaCheck className='iconHero1' /></div> <hr className='iconhrhero' /> <hr className='iconhrheroa' /> 
</div>


</div>

<div className="findone">

<div className="findHero">

<h3>
Find One
</h3>
<p>
Look for your Emebet based on your requirement
</p>

</div>

<div className="payHero">
<h3>
Pay Fee
</h3>
<p>
Pay 20-25% commission using Mobile banking, visiting banks or call us at 0930104785
</p>
</div>

<div className="contactHero">
<h3>
Contact Emebet
</h3>
<p>
We will give you her contact so that you can call her right away
</p>
</div>

</div>

</div>
</div>

<div className="herosec5">
<div className="clientfeedback">
  <p>
  CLIENT FEEDBACKS
  </p>
<h2>
What Client's Say
</h2>
<hr />


<Swiper

      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="swipe_clinet"
      breakpoints={{
       1024: {
          slidesPerView: 3,
        },
        720: {
          slidesPerView: 2,
        },
        425: {
          slidesPerView: 1,
        },
        414: {
          slidesPerView: 1,
        },
        412: {
          slidesPerView: 1,
        },
        390: {
          slidesPerView: 1,
        },
        393: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 1,
        },
        360: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1,
        },
        280: {
          slidesPerView: 1,
        },
      }}
    >
      <div className="conclient">
      <SwiperSlide>
        <div className="confeedback">
  <p>
  Hello, Really great website! How do we contact the employees? the VIEW CONTACT links are broken.
  </p>
  <div className="heroavater">
    <div className="avatorHeroimg">
    <img src={avater} className='avater' alt="" />
    </div>
  

  <div className="herotextavater">
  <h4>
  Rodas taye 
  </h4>
  <h5>
  tayerodas2@gmail.com
  </h5>
  </div>

  </div>
 
</div>
</SwiperSlide>
      <SwiperSlide>
      <div className="confeedbackk">
<p>
  Hello, Really great website! How do we contact the employees? the VIEW CONTACT links are broken.
  Hi, I made a marketing video for your website for free, can I send it here? Respond with, "yes" if so.
  Hello, Really great website! How do we contact the employees? the VIEW CONTACT links are broken.
  Hi, I made a marketing video for your website for free, can I send it here? Respond with, "yes" if so.
  </p>
  <div className="heroavater">
    <div className="avatorHeroimg">
    <img src={avater} className='avater' alt="" />
    </div>
  

  <div className="herotextavater">
  <h4>
  Rodas taye 
  </h4>
  <h5>
  tayerodas2@gmail.com
  </h5>
  </div>

  </div>
 
</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="confeedback">
<p>
  Hello, Really great website! How do we contact the employees? the VIEW CONTACT links are broken.
  </p>
  <div className="heroavater">
    <div className="avatorHeroimg">
    <img src={avater} className='avater' alt="" />
    </div>
  

  <div className="herotextavater">
  <h4>
  Rodas taye 
  </h4>
  <h5>
  tayerodas2@gmail.com
  </h5>
  </div>

  </div>
 
</div>
</SwiperSlide>
</div>
 <div className="conclient">
      <SwiperSlide>
        <div className="confeedback">
  <p>
  Hello, Really great website! How do we contact the employees? the VIEW CONTACT links are broken.
  </p>
  <div className="heroavater">
    <div className="avatorHeroimg">
    <img src={avater} className='avater' alt="" />
    </div>
  

  <div className="herotextavater">
  <h4>
  Rodas taye 
  </h4>
  <h5>
  tayerodas2@gmail.com
  </h5>
  </div>

  </div>
 
</div>
</SwiperSlide>
      <SwiperSlide>
      <div className="confeedbackk">
<p>
  Hello, Really great website! How do we contact the employees? the VIEW CONTACT links are broken.
  Hi, I made a marketing video for your website for free, can I send it here? Respond with, "yes" if so.
  Hello, Really great website! How do we contact the employees? the VIEW CONTACT links are broken.
  Hi, I made a marketing video for your website for free, can I send it here? Respond with, "yes" if so.
  </p>
  <div className="heroavater">
    <div className="avatorHeroimg">
    <img src={avater} className='avater' alt="" />
    </div>
  

  <div className="herotextavater">
  <h4>
  Rodas taye 
  </h4>
  <h5>
  tayerodas2@gmail.com
  </h5>
  </div>

  </div>
 
</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="confeedback">
<p>
  Hello, Really great website! How do we contact the employees? the VIEW CONTACT links are broken.
  </p>
  <div className="heroavater">
    <div className="avatorHeroimg">
    <img src={avater} className='avater' alt="" />
    </div>
  

  <div className="herotextavater">
  <h4>
  Rodas taye 
  </h4>
  <h5>
  tayerodas2@gmail.com
  </h5>
  </div>

  </div>
 
</div>
</SwiperSlide>
   </div>
     
    </Swiper>

   

    </div>

  {/*-- 
<div className="dots">

<button    className="dotsHero dotsHero1"></button>
<button    className="dotsHero dotsHero2"> </button>
<button   className="dotsHero dotsHero3">  </button>
<button    className="dotsHero dotsHero4">  </button>
</div>
  --*/}



    </div>

    <div className="herosec6">

<div className="starthero">
<h1>
Start Working With Our Company
</h1>

<div className="startherobtnWork">
    <button onClick={registerPage} className='startbtnhewe startbtnrewe'>
    Register As Agent Now
    </button>
  </div>
</div>

      </div>

    </div>
  )
}

export default Hero