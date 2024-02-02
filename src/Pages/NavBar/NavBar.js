
import React, { useState } from 'react'
import '../NavBar/NavBar.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import imgTitle from '../../component/Assets/images-removebg-preview.png'
import { Link } from 'react-router-dom';

import { RiMenu3Fill } from "react-icons/ri";




const NavBar = () => {


    const [user,setUsers]=useState('home');

    const [menu,setMenu]=useState(true)

    const liNav=document.querySelector('.liNav');

   const home=()=>{
     if(window.innerWidth<='912'){
      const ulNav=document.querySelector('.ulNav');
      ulNav.style='display:none;'
      setMenu(true)
     }
      
    }


    const menuHidden=()=>{
      if(menu==true){
        const ulNav=document.querySelector('.ulNav');
        const listNav=document.querySelector('.listNav');
        listNav.style='display:flex;   '
        ulNav.style='display:flex; flex-direction: column; align-items: center;justify-content: center;  '
        setMenu(false)
      }
      else if(menu==false){
        const ulNav=document.querySelector('.ulNav');
        const listNav=document.querySelector('.listNav');
        listNav.style='display:none;'
        ulNav.style='display:none;'
        setMenu(true)
      }

    }


  return (
    <div className='NavBar'>


<div className="header">

<div className="headerall">

    <div className="phoneLocation">
     
 <div className="phone">
 <a  href="tel:+251930104785"><FaPhoneAlt className='icon' /> +251930104785 </a>  
 </div>

 <div className="location">
 <FaGlobe className='icon' /><h3>Around Ajip, Jimma</h3>
    </div> 

    </div>


    <div className="emailIcon">
  <div className="email">    
  <a href = "mailto: abelahabtamu1@gmail.com"> <MdOutlineEmail className='iconMsg' />  abelahabtamu1@gmail.com </a>
  </div> 

<hr />

<div className="icons">

<FaFacebookF  className="iconss" />
<FaTelegram  className="iconss" />
<FaInstagram  className="iconss" />

</div>


    </div>
</div>

</div>

<div className="headerDiv">
    <div className="headerDivNav">
    <div className="headerallNav">

<div className="title">
  <div className="cicle">
  <img src={imgTitle} className='imgNav'  />
    </div> 
   <h2>Ewneta Weyzero</h2>
</div>

<RiMenu3Fill className='icon_menu' onClick={menuHidden} />

<div className="listNav">
    <ul className="ulNav">
<li onClick={home} className="liNav"><Link onClick={()=>setUsers('home')} className={user == 'home' ? 'active' : 'noactive' }  to=''>   HOME { user == 'home' ? <hr/> : <></>  }</Link></li>
<li onClick={home}  className="liNav"><Link onClick={()=>setUsers('service')} className={user == 'service' ? 'active' : 'noactive' }  to='/serv'>  SERVICE { user == 'service' ? <hr/> : <></>  }</Link></li>
<li onClick={home}  className="liNav"><Link onClick={()=>setUsers('employees')} className={user == 'employees' ? 'active' : 'noactive' }  to='/employe'>EMPLOYEES { user == 'employees' ? <hr/> : <></>  }</Link></li>
<li onClick={home}  className="liNav"><Link onClick={()=>setUsers('contact')} className={user == 'contact' ? 'active' : 'noactive' }  to='/contact'>CONTACT { user == 'contact' ? <hr/> : <></>  }</Link></li>
<li onClick={home}  className="liNav"><Link onClick={()=>setUsers('register')} className={user == 'register' ? 'active' : 'noactive' }  to='/register'>REGISTER { user == 'register' ? <hr/> : <></>  }</Link></li>
<li onClick={home}  className="liNav liNavLast" ><Link onClick={()=>setUsers('login')} className={user == 'login' ? 'active' : 'noactive' }  to='/login'>LOGIN { user == 'login' ? <hr/> : <></>  }</Link></li>
    </ul>
</div>
</div>

</div>
</div>

    </div>
  )
}

export default NavBar
