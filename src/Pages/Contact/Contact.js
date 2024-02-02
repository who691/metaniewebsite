import React, { useEffect, useState } from 'react'

import './Contact.css'
import Map from '../Map/Map'

import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../Firebase-Config';
import swal from 'sweetalert';

const Contact = () => {

const [userName,setUserName]=useState('');
const [userEmail,setEmail]=useState('');
const [userMsg,setMsg]=useState('');

const dbRef= collection(db,'usermsg');

useEffect(()=>{
  window.scrollTo(0,0)
    },[])

const feedBack= async ()=>{
  await addDoc(dbRef,{email:userEmail,msg:userMsg,name:userName})

 setEmail('');

 setUserName('');

 setMsg('');

 
 swal('Tnx For your feedback 😊');

}


  return (
    <div className="contactsec1">
    <div className="clientcontact">
      <p>
      GET IN TOUCH
      </p>
    <h2>
    Send Us Message
    </h2>
    <hr />
    </div>


    <div className="contactinfo">
      <div className="mapGoogle">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1705.4523227812365!2d38.77867906906879!3d8.99073533478897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b855836e2265f%3A0xd982813bc48420c7!2sLa%20Vie%20En%20Rose%20Addis!5e0!3m2!1sam!2set!4v1701674774584!5m2!1sam!2set"
     width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="contactinforeal">
      <h1>
          Any Question?
           Contact Us
          </h1>
      
        <div className="contextreal">
        <div className="iconContactreal">
<FaLocationDot className='iconConReal'/>
        </div>
        <div className="iconContactText">
          <h2>Company Address :</h2>
          <p>Meskel Flower, Addis Ababa</p>
        </div>
      </div>
        <div className="contextreal">
        <div className="iconContactreal">
<MdOutlineEmail className='iconConReal'/>
        </div>
        <div className="iconContactText">
          <h2>Email Address : </h2>
          <a href = "mailto: abelahabtamu1@gmail.com">    <p>abelahabtamu1@gmail.com</p> </a>
        </div>
      </div>
        <div className="contextreal">
        <div className="iconContactreal">
<FaPhoneAlt className='iconConReal'/>
        </div>
        <div className="iconContactText">
          <h2>Phone Number :</h2>
          <a  href="tel:+251930104785">      <p>+251930104785</p> </a>
        </div>
      </div>



   </div>

    </div>
 

 <div className="conFileInfo">

  <div className="nameEmailInfo">

<div className="nameInfo">
  <input type='text' className='nameTextInfo' value={userName} onChange={(e)=>setUserName(e.target.value)}  placeholder='Your Name' /> 
  <FaUser className='nameIconInfo' />
</div>

<div className="emailInfo">
<input type='email' className='emailTextInfo' value={userEmail} onChange={(e)=>setEmail(e.target.value)}   placeholder='Your Email'  />
<MdOutlineEmail className='emailIconInfo' />
</div>


  </div>

  <div className="feedbackreal">
<input type='text' className='feedbackTextInfo' value={userMsg} onChange={(e)=>setMsg(e.target.value)}    placeholder='Your Feedback' /> 
</div>

<div className="herobtnWork">
    <button onClick={feedBack} className='btnhewecontact btnrewecontact'>
    Submit Now
    </button>
  </div>

 </div>




   
    </div>
  )
}

export default Contact