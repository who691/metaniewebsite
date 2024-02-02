import React, { useEffect, useState } from 'react'

import './Login.css'
import imgTitle from '../../component/Assets/images-removebg-preview.png'
import imgHero1 from '../../component/Assets/img1.png'
import { collection, doc, getDoc, getDocs, query,  where } from 'firebase/firestore'
import { db } from '../../Firebase-Config'
import { Link,useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserContext'

const Login = () => {


  const [checkboxt,setCheckboxt]=useState(false);
  const [checkboxtt,setCheckboxtt]=useState(false);

  const [module,setModule]=useState('one');
  const [userOne,setUserOne]=useState([]);

  const [pass,setPass]=useState('')
  const [emailOrPhone,setEmailOrPhone]=useState('')

  const [email,setEmail] = useState('')
  const [emailForget,setEmailForget] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

  const refDb=collection(db,'userall');

  const navigate=useNavigate();

  const {logIn,googleSignIn,forgetPass,user}=useUserAuth();

 // const docRef = collection(db,'userall')
 // const q=query(docRef,where('phone', '==', email)) 


 const activeCheck=()=>{
  const checkactive=document.querySelector('.checkboxe');
  const checkactivee=document.querySelector('.checkboxs');

  if(checkboxt==false){
    checkactive.checked=true;
    checkactivee.checked=false;
    setCheckboxt(true)
    setCheckboxtt(false)
   
  }
 else if(checkboxt==true){
    checkactive.checked=false;
    setCheckboxt(false)
    setCheckboxtt(false)
  }

  

}

const activeCheckk=()=>{

  const checkactive=document.querySelector('.checkboxe');
  const checkactivee=document.querySelector('.checkboxs');
  if(checkboxtt==false){
    checkactivee.checked=true;
    checkactive.checked=false;
    setCheckboxtt(true)
    setCheckboxt(false)
  }
 else if(checkboxtt==true){ 
    checkactivee.checked=false;
    setCheckboxtt(false)
    setCheckboxt(false)
  }

}

const forgotePagee=()=>{
  setModule('two')
  }




    

  const handelsubmit=async(e)=>{
    e.preventDefault()
    setError('');

        try {
          await logIn(email,password)
          if(user && checkboxt==true){
            navigate('/')
          }
         else if(user && checkboxtt==true){
            navigate('/serv')
          }
          
        } catch (error) {
          setError(error.message);
          console.log(error)
        }
    
      }
    
      const handelgooglesubmit=async(e)=>{
        e.preventDefault()
        setError('');
            try {
              await googleSignIn()
              navigate('/')
            } catch (error) {
              setError(error.message);
              console.log(error)
            }
        
          }
        
    
      const handelforgetsubmit=async(e)=>{
        e.preventDefault()
        setError('');
            try {
              await forgetPass(emailForget)
              alert('check your email')
            } catch (error) {
              setError(error.message);
              console.log(error)
            }
        
          }
    






  return (
   <div className="logintext">
<div className="loginfile">

    <div className="loginimagereal">

    <div className="logimagefake">
<img src={imgTitle} alt="" />
</div>

      <div className="logimagefakeone">
      <img src={imgHero1} className='imagereallog' alt="" />
      </div>

      <h2>
      Weyzero
      </h2>
      <p>
      We are helping thousands of families in finding their perfect EMEBET.Let's Work Together On Emebet
      </p>

      
<div className="herobtnWork">
    <button className='btnhewelog btnrewelog'>
    Go To Home Page
    </button>
  </div>

  <h5>
  © 2021
  </h5>

    </div>


{ module=='one'  ?

<div className="loginpagetext">

<div className="textloginreal">
<div className="logimagefakereal">
<img src={imgTitle} alt="" />
</div>
<h2>
Weyzero
</h2>
<p>
Login Page
</p>
</div>

<div className="rolereal">
  <p>What is your role?</p>
</div>

<div onClick={()=>activeCheck()} className="inputreal inputrealemployee">
<input type="checkbox" name="" id="" className='checkbox checkboxe' /> <span>I AM EMPLOYEE (ሰራተኛ)</span>
</div>
<div className="inputreal inputrealemployee" onClick={()=>activeCheckk()}>
<input type="checkbox" name="" id="" className='checkbox checkboxs' /> <span>I AM EMPLOYER (ቀጣሪ)</span>
</div>
<div className="inputreal">
<input type='text' name="" id="" value={email}  onChange={(e)=>setEmail(e.target.value)} className='textInputreal' placeholder='Login With Email' /> 
</div>
<div className="inputreal">
<input type='text' name="" id=""  value={password} onChange={(e)=>setPassword(e.target.value)} className='textInputreal' placeholder='Password' /> 
</div>


<div className="loginandforget">

<div className="bothdorgote">
<div  className="forget">
  <button onClick={()=>forgotePagee()}> Forgot Password? </button>
</div>

<div className="signup">
Don't have an account? <span> <a href="">Signup here</a></span> 
</div>
</div>

<div className="herobtnWork">
    <button onClick={handelsubmit} className='btnhewecontact btnrewecontact'>
    Login
    </button>
  </div>

</div>



    </div>

: <></>}

{ module=='two'  ?

<div className="loginpagetext">

<div className="textloginreal">
<div className="logimagefakereal">
<img src={imgTitle} alt="" />
</div>
<h2>
Weyzero
</h2>
<p>
Login Page
</p>
</div>

<div className="rolereal">
  <p>What is your role?</p>
</div>

<div onClick={()=>activeCheck()} className="inputreal inputrealemployee">
<input type="checkbox" name="" id="" className='checkbox checkboxe' /> <span>I AM EMPLOYEE (ሰራተኛ)</span>
</div>
<div className="inputreal inputrealemployee" onClick={()=>activeCheckk()}>
<input type="checkbox" name="" id="" className='checkbox checkboxs' /> <span>I AM EMPLOYER (ቀጣሪ)</span>
</div>
<div className="inputreal">
<input type='text' name="" id="" value={emailForget} onChange={(e)=>setEmailForget(e.target.value)} className='textInputreal' placeholder='Enter Your Email' /> 
</div>


<div className="loginandforget">



<div className="herobtnWork">
    <button onClick={handelforgetsubmit}  className='btnhewecontact btnrewecontact'>
   Next
    </button>
  </div>

</div>



    </div>

: <></>}





  
</div>
   </div>
  )
}

export default Login