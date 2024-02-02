import React, { useEffect, useState } from 'react'

import './Login.css'
import imgTitle from '../../component/Assets/images-removebg-preview.png'
import imgHero1 from '../../component/Assets/img1.png'
import { collection, doc, getDoc, getDocs, query,  where } from 'firebase/firestore'
import { db } from '../../Firebase-Config'
import { Link,useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserContext'

import swal from 'sweetalert';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const LoginPhone = () => {


  const {signinPhone}=useUserAuth();

  const [confirmm,setConfirmm]=useState(null);
  const [otp,setOtp]=useState('');
  const [checkboxt,setCheckboxt]=useState(false);
  const [checkboxtt,setCheckboxtt]=useState(false);

  const [module,setModule]=useState('one');
  const [userOne,setUserOne]=useState([]);

  const [pass,setPass]=useState('')
  const [emailOrPhone,setEmailOrPhone]=useState('')

  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [emailForget,setEmailForget] = useState('')
  const [phoneForget,setPhoneForget] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState(false)

  const [showPassword, setShowPassword] = useState(false);
 
  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };



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



  useEffect(()=>{
    window.scrollTo(0,0)
      },[])
    

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
  const handelsubmitPhone=async(e)=>{
    e.preventDefault()
    setError('');

    const regExp=/^\d{9,10}$/;
    let formattedPhoneNumber = phone.replace(/^\+?251?0?(\d{9})$/, "$1");
   // Specifically handle numbers starting with "09" followed by 7 digits:
   formattedPhoneNumber = formattedPhoneNumber.replace(/^0(\d{9})$/, "$1");
 
  let formattedPhone = formattedPhoneNumber.replace(/^(\d{9})$/, "251$1");
 
 
     console.log(formattedPhone)

    const q = query(refDb, where('phone', '==', formattedPhone) ,where('pass','==',password));


    if(checkboxt==false && checkboxtt==false){
      swal('Please select one of the checkBox ');
    }

   else if(phone.length===0){
      swal('Please Enter Phone Number');
    }
    else if(!regExp.test(formattedPhoneNumber)){
      swal('Please Enter Valid Phone ');
    }
    else if(password.length===0){
      swal('Please Enter Password');
    }

   

    else{
      const querySnapshot = await getDocs(q);
      const matchingDocuments =  querySnapshot.docs;
      
      if (matchingDocuments.length > 0) {
              if(user && checkboxt==true){
                navigate('/work')
              }
             else if(user && checkboxtt==true){
                navigate('/worker')
              }
         
      } else if  (matchingDocuments.length == 0)  {
        swal('There is no user in this phone or if you forget your password please use forget password ');
      }
      
    }


        //  setError(error.message);
      //    console.log(error)

    
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
    
      const handelforgetsubmitPhone=async(e)=>{
        
    const regExp=/^\d{9,10}$/;
    let formattedPhoneNumber = phoneForget.replace(/^\+?251?0?(\d{9})$/, "$1");
   // Specifically handle numbers starting with "09" followed by 7 digits:
   formattedPhoneNumber = formattedPhoneNumber.replace(/^0(\d{9})$/, "$1");
 
  let formattedPhone = formattedPhoneNumber.replace(/^(\d{9})$/, "+251$1");
 
 
     console.log(formattedPhone)

     
    if(checkboxt==false && checkboxtt==false){
      swal('Please select one of the checkBox ');
    }

      else  if(phoneForget.length===0){
          swal('Please Enter Phone Number');
        }
      
        else if(!regExp.test(formattedPhoneNumber)){
          swal('Please Enter Valid Phone ');
        }

          try {
            const numValue=`+${formattedPhone.replace(/\D/g,'')}`;
          const confirmation= await signinPhone(numValue);
          setConfirmm(confirmation)
          alert('otp sent')
          setModule('three')
          } catch (error) {
            swal(error.message)
          }
            
  
        
          }
    
      const handelforgetsubmitPhoneOtp=async(e)=>{
   
          try {
  
            await confirmm.confirm(otp);
            if( checkboxt==true){
              navigate('/work')
            }
           else if( checkboxtt==true){
              navigate('/worker')
            }
            }
            catch (error){
              swal(error.message)
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
<input type='number' name="" id="" value={phone}  onChange={(e)=>setPhone(e.target.value)} className='textInputreal' placeholder='Login With Phone' /> 
</div>




<div className="inputreal">
<input type={showPassword ? 'text' : 'password'} name="" id="" onChange={(e)=>setPassword(e.target.value)} className='textInputreal' placeholder='Password' /> 
<button className="password-viewer-icon" onClick={handleShowPasswordToggle}>
        {showPassword ? <FaEyeSlash /> :  <FaEye />}
      </button>
</div>


<div className="loginandforget">

<div className="bothdorgote">
<div  className="forget">
  <button onClick={()=>forgotePagee()}> Forgot Password? </button>
</div>

<div className="signup">
Don't have an account? <span> <Link to='/register' >Signup here</Link></span> 
</div>
</div>

<div className="herobtnWork">
    <button onClick={handelsubmitPhone} className='btnhewecontact btnrewecontact'>
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
<input type='tel' name="" id="" value={phoneForget} onChange={(e)=>setPhoneForget(e.target.value)} className='textInputreal' placeholder='Enter Your Phone' /> 
</div>

<div className='recaptcha'  id='recaptcha-container'></div>

<div className="loginandforget">



<div className="herobtnWork">
    <button onClick={handelforgetsubmitPhone}  className='btnhewecontact btnrewecontact'>
   Next
    </button>
  </div>

</div>



    </div>

: <></>}


{ module=='three'  ?

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




<div className="inputreal">
<input type='number' name="" id="" value={otp} onChange={(e)=>setOtp(e.target.value)} className='textInputreal' placeholder='Enter Otp' /> 
</div>



<div className="loginandforget">



<div className="herobtnWork">
    <button onClick={handelforgetsubmitPhoneOtp}  className='btnhewecontact btnrewecontact'>
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

export default LoginPhone