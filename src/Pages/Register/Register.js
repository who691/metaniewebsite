import React,{useEffect, useState} from 'react'
import './Register.css'

import imgTitle from '../../component/Assets/images-removebg-preview.png'
import imgHero1 from '../../component/Assets/img1.png'

import { IoMdArrowDropdown } from "react-icons/io";
import Select from 'react-select';
import { Link,useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db, storage } from '../../Firebase-Config';
import { UseContextValue, useUserAuth } from '../../context/UserContext';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { reload } from 'firebase/auth';

import {keyframes} from 'styled-components';
import swal from 'sweetalert';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {


  const [fname,setFname]=useState('');
  const [lname,setLname]=useState('');
  const [email,setEmail]=useState('');
  const [age,setAge]=useState('');
  const [phone,setPhone]=useState('');
  const [lang,setLang]=useState('');
  const [self,setSelf]=useState('')
  const [otp,setOtp]=useState('');
  const [confirmm,setConfirmm]=useState(null);
  const [imageValue,setImageValue]=useState([]);
  const [idValue,setIdValue]=useState([]);
  const [tinValue,setTinValue]=useState([]);
  const [selectedState,setSelectedState]=useState('');
  const [selectedArea,setSelectedArea]=useState('');
  const [selectedWork,setSelectedWork]=useState(null);
  const [confirmPassword,setConfirmPassword]=useState('');
  const [password,setPassword]=useState('');
  const [legalNum,setLegalNum]=useState('');
  const [tin,setTin]=useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionSpeci, setSelectedOptionSpeci] = useState('');
  const [countryState, setCountryState] = useState('');
  const [empState, setEmpState] = useState('');
  const [salaryState, setSalaryState] = useState('');
  const [religion, setReligion] = useState('');
  const [language, setLanguage] = useState('');
  const [classState,setClassState] = useState('');
  const [expState,setExpState] = useState('');
  const [eduState,setEduState] = useState('');
  const [child,setChild] = useState('');
  const [live,setLive] = useState('');
  const [completedValue,setCompletedValue] = useState(0);

  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPasswordToggle = () => {
    setConfirmShowPassword(!confirmShowPassword);
  };

  
  const [checkboxTerm,setCheckboxTerm]=useState(false);

  const activeCheckTerm=()=>{

    const checkactive=document.querySelector('.checkboxTerm');
  
  
    if(checkboxTerm==false){
      checkactive.checked=true;
      setCheckboxTerm(true)
    }
   else if(checkboxTerm==true){
      checkactive.checked=false;
      setCheckboxTerm(false)
  
    }
  
    
  
  }


const navigate=useNavigate();


  const location={
    'Addis Ababa': ['Lebu','Kaliti','Megenagna'],
    'Jimma':[ 'Ajip','Saris','Qochi' ]
  }





  const {signinPhone}=useUserAuth();



  const options = [
    { value: 'cooking', label: 'cooking' },
    { value: 'adult care', label: 'adult care' },
    { value: 'private nurse', label: 'private nurse' } ,
    { value: 'baby sitter', label: 'baby sitter' },
    { value: 'house keeper', label: 'house keeper' },
    { value: 'waitress', label: 'waitress' } ,
    { value: 'care for special needs', label: 'care for special needs' } ,
    { value: 'maid', label: 'maid' } ,
    { value: 'hair stylist', label: 'hair stylist' } ,
    { value: 'receptionist', label: 'receptionist' } ,
    { value: 'sales', label: 'sales' } ,
    { value: 'chef(ሼፍ)', label: 'chef (ሼፍ)' } ,
    { value: 'accountant', label: 'accountant' } ,
    { value: 'secretary', label: 'secretary' } ,
    { value: 'tutor', label: 'tutor' } ,
  ]
  const optionss = [
    { value: 'cooking', label: 'cooking' },
    { value: 'adult care', label: 'adult care' },
    { value: 'private nurse', label: 'private nurse' } ,
    { value: 'baby sitter', label: 'baby sitter' },
    { value: 'house keeper', label: 'house keeper' },
    { value: 'waitress', label: 'waitress' } ,
    { value: 'care for special needs', label: 'care for special needs' } ,
    { value: 'maid', label: 'maid' } ,
    { value: 'hairstylist', label: 'hair stylist' } ,
    { value: 'receptionist', label: 'receptionist' } ,
    { value: 'sales', label: 'sales' } ,
    { value: 'chef(ሼፍ)', label: 'chef (ሼፍ)' } ,
    { value: 'accountant', label: 'accountant' } ,
    { value: 'secretary', label: 'secretary' } ,
    { value: 'tutor', label: 'tutor' } ,
  ]

  const [checkboxt,setCheckboxt]=useState(false);
  const [checkboxtt,setCheckboxtt]=useState(false);
  const [checkboxttt,setCheckboxttt]=useState(false);


  


  const [module,setModule]=useState('one');
  const [qetari,setQetari]=useState('one');
  const [wekil,setWekil]=useState('one');
 const [back,setBack]=useState('')

 
 
 useEffect(()=>{
  window.scrollTo(0,0)
    },[])

  useEffect(()=>{
    
     
  const conditionSerategna=()=>{
    const serategna=document.querySelector('#serategna');
    const qetari=document.querySelector('#qetari');
   const wekil=document.querySelector('#wekil');
  
   if(serategna?.checked===true){
   console.log('amnalewa')
   }
   else if(qetari?.checked===true){
    console.log('amnalew')
   }
   else if(wekil?.checked===true){
    console.log('amnale')
   }
  }
    conditionSerategna()

  },[checkboxt,checkboxtt,checkboxttt])
 

 



  const activeCheck=()=>{

  const checkactive=document.querySelector('.checkboxe');
  const checkactivee=document.querySelector('.checkboxs');
  const checkactiveee=document.querySelector('.checkboxss');

  if(checkboxt==false){
    checkactive.checked=true;
    checkactivee.checked=false;
    checkactiveee.checked=false;
    setCheckboxt(true)
    setCheckboxtt(false)
    setCheckboxttt(false)
   
  }
 else if(checkboxt==true){
    checkactive.checked=false;
    setCheckboxt(false)
    setCheckboxtt(false)
    setCheckboxttt(false)
  }

  

}

const activeCheckk=()=>{

  const checkactive=document.querySelector('.checkboxe');
  const checkactivee=document.querySelector('.checkboxs');
  const checkactiveee=document.querySelector('.checkboxss');
  if(checkboxtt==false){
    checkactivee.checked=true;
    checkactive.checked=false;
    checkactiveee.checked=false;
    setCheckboxtt(true)
    setCheckboxt(false)
    setCheckboxttt(false)
  }
 else if(checkboxtt==true){ 
    checkactivee.checked=false;
    setCheckboxtt(false)
    setCheckboxttt(false)
    setCheckboxt(false)
  
  }

}
const activeCheckkk=()=>{

  const checkactive=document.querySelector('.checkboxe');
  const checkactivee=document.querySelector('.checkboxs');
  const checkactiveee=document.querySelector('.checkboxss');
  if(checkboxttt==false){
    checkactiveee.checked=true;
    checkactivee.checked=false;
    checkactive.checked=false;
    setCheckboxttt(true)
    setCheckboxtt(false)
    setCheckboxt(false)
  }
 else if(checkboxttt==true){ 
    checkactiveee.checked=false;
    setCheckboxttt(false)
    setCheckboxtt(false)
    setCheckboxt(false)
  }

}





  async function uploadImage(ref, content) {
    await uploadBytes(ref, content);
    return getDownloadURL(ref);
  }
  
  const uploadImagePhoto = async () => {
    const refImage = ref(storage, `Images/${tinValue.name}`);
    return uploadImage(refImage, tinValue);
  };
  
  const uploadImageId = async () => {
    const refId = ref(storage, `Id/${idValue.name}`);
    return uploadImage(refId, idValue);
  };
  const uploadImageValue = async () => {
    const refId = ref(storage, `Idimage/${imageValue.name}`);
    return uploadImage(refId, imageValue);
  };
  

  const {signUp}=useUserAuth();


  const refDb=collection(db,'userall');
  const refQetari=collection(db,'qetari'); 
  const refWekil=collection(db,'wekil');


  
const submit=async()=>{

  let regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/ ;


  if(email.length==0){
    swal('Please Enter Email');
  }

  else if(!regEmail.test(email) ){
    swal('Please Enter Valid Email')
   
  }

 else if(password.length==0){
    swal('Please Enter Password');
  }
  else if(confirmPassword.length==0){
    swal('Please Enter Confirm Password');
  }
  else if(confirmPassword!==password){
    swal('Confirm Password IS Not Match With Password');
  }

  else if(checkboxTerm==false){
    swal('You Have To Agree With The Terms And Conditions Of Weyzero.com ');
  }
  

  else{
    const imageId = await uploadImageId();
    const imageUrl = await uploadImagePhoto();
    const imageVal=await uploadImageValue();
    
    addDoc(refDb, {
      fname:fname,
      lname:lname,
      email:email,
      cityId:selectedState, 
      pass:password,
      haveChild:child,
      tellAbout:self,
      liveIn:live,
      haveclass:classState,
      haveExpireance:expState,
      isPartime:empState,
      Education:eduState,
      language:language,
      lang:lang,
      religion:religion,
      workType:selectedWork,
      age: Number(age) ,
      salary:salaryState,
      country:selectedArea,
      phone:phone,
      urlId: imageId,
      urlTin: imageVal,
    });
    
    navigate('/work')
    
      try {
        await signUp(email,password)
      } catch (error) {
        console.log(error.message)
      }
  }

 

}





console.log(selectedWork)





// console.log(selectedWork )

const submitQetari=async()=>{
const imageId = await uploadImageId();
const imageVal=await uploadImageValue();

if(checkboxTerm==false){
  swal('You Have To Agree With The Terms And Conditions Of Weyzero.com ');
}


else{
  if (selectedArea) {
    addDoc(refQetari, {
      fname:fname,
      lname:lname,
      email:email,
      selectCity:selectedState,
    selectedWork:selectedWork,
    selectedArea:selectedArea,
      pass:password,
      phone:phone,
      urlId: imageVal,
    });
    }
    
    
    
    
    
    
    navigate('/worker')
    
    try {
      await signUp(email,password)
    } catch (error) {
      console.log(error.message)
    }
}





}





const submitWekil=async()=>{

//  const countryId=document.getElementById('countryId').value;
//  const religionId=document.getElementById('religionId').value;
 // const lang=document.getElementById('lang').value;
 // const empId=document.getElementById('empId').value
 // const salaryId=document.getElementById('salaryId').value;
//  const eduId=document.getElementById('eduId').value;
//  const expId=document.getElementById('expId').value;
//  const classId=document.getElementById('classId').value;
//  const workId=document.getElementById('workId').value;
// const workerId=document.getElementById('workerId').value;
//  const cityyId=document.getElementById('cityyId').value;
//  const cityId=document.getElementById('cityId').value;
//   const locId=document.getElementById('locId').value;
//   const speciId=document.getElementById('speciId').value;

if(checkboxTerm==false){
  swal('You Have To Agree With The Terms And Conditions Of Weyzero.com ');
}


else{


const selectedValue = selectedOption;
const selectedValueSpeci=selectedOptionSpeci;

console.log(selectedValue)
 console.log(selectedValueSpeci)


const imageId = await uploadImageId();
const imageUrl = await uploadImagePhoto();

const imageVal=await uploadImageValue();

addDoc(refWekil, {
  fname:fname,
  lname:lname,
  email:email,
  cityId:selectedValue,
  speciId:selectedArea,
  pass:password,
  legalNum:legalNum,
  tin:tin,
  phone:phone,
  urlId: imageVal,
  urlTin: imageUrl,
});

navigate('/workWekil')

try {
  await signUp(email,password)
} catch (error) {
  console.log(error.message)
}

}

}



const modulOne=()=>{

  const serategnaa=document.querySelector('#serategna');
  const qetarii=document.querySelector('#qetari');
 const wekill=document.querySelector('#wekil');

 setCompletedValue(15)

 if(serategnaa?.checked==true){
  setModule('two')
  setQetari('')
  setWekil('')
 }
 else if(qetarii?.checked==true){
  setQetari('two')
  setModule('')
  setWekil('')
 }
 else if(wekill?.checked==true){
  setWekil('two')
  setModule('')
  setQetari('')
 }

}

const modulOnee=()=>{
  window.location.reload(false);
  setModule('one'); 
  setQetari('one');
  setWekil('one')
}

const modulOnea= async()=>{
  setModule('two')
}

const modulTwo= async()=>{


  const regExp=/^\d{9,10}$/;

  let formattedPhoneNumber = phone.replace(/^\+?251?0?(\d{9})$/, "$1");
// Specifically handle numbers starting with "09" followed by 7 digits:
formattedPhoneNumber = formattedPhoneNumber.replace(/^0(\d{9})$/, "$1");

let formattedPhone = formattedPhoneNumber.replace(/^(\d{9})$/, "+251$1");

console.log(formattedPhone)


  if(fname.length==0){
    swal('Please Enter First Name')
  }

  else if(lname.length==0){
    swal('Please Enter Last Name')
  }
  else if(age.length==0){
    swal('Please Enter Age')
  }

  else if(phone.length===0){
    swal('Please Enter Phone Number');
  }
   
  else if(!regExp.test(formattedPhoneNumber)){
    swal('Please Enter Valid Phone ');
  }
  
  else if(selectedState.length===0){
    swal('Please Select City');
  }


  else{
    try {
      const numValue=`+${formattedPhone.replace(/\D/g,'')}`;
    const confirmation= await signinPhone(numValue);
    setConfirmm(confirmation)
    alert('otp sent')
    setModule('three')
    setCompletedValue(30)
    } catch (error) {
      console.log(error.message)
    }
  }

  

}



const modulThree= async()=>{
  
  if(otp.length==0){
    swal('Please Enter Otp')
  }

  else{
    try {
  
      await confirmm.confirm(otp);
      setModule('four')
      setCompletedValue(43)
      }
      catch (error){
        console.log(error)
      }
  }



}

const modulThreeBack= async()=>{

    setCompletedValue(58)
    setModule('four') 

  }


const modulFour= async()=>{

  if(selectedArea.length==0){
    swal('Please Select Specific Location')
  }

  else if(religion.length==0){
    swal('Please Select Religion')
  }

  else if(language.length==0){
    swal('Please Select Language')
  }
  else if(empState.length==0){
    swal('Please Select Employement Type')
  }
  else if(salaryState.length==0){
    swal('Please Select Monthly Expected Salary')
  }


  else{
    setCompletedValue(70)
    setModule('five')
  }

  
}


const modulFive=()=>{

  if(!selectedWork){
    swal('Please Select Service')
  }

  else if(eduState.length==0){
    swal('Please Select Education Level')
  }

  else if(expState.length==0){
    swal('Please Select Experience')
  }
  else if(classState.length==0){
    swal('Please Fill The "Do You Take Class" Area')
  }

  else{
    setCompletedValue(85)
    setModule('six')
  }

  
}
const modulSix= async()=>{

 if(child.length==0){
    swal('Please Fill The "Do You Have Children" Area')
  }
  else if(live.length==0){
    swal('Please Fill The "Live In Or Live Out Area" Area')
  }

  else if(imageValue.length==0){
    swal('Please Upload Profile Image')
  }
  else if(idValue.length==0){
    swal('Please Upload ID or Passport')
  }

  else{
    setCompletedValue(100)
    setModule('seven')
  }
  
}


const qetariOnee=()=>{
  window.location.reload(false);
  setModule('one'); 
    setQetari('')
}

const qetariOne=()=>{
  setCompletedValue(25)
  setQetari('two')
}


const qetariTwo=()=>{

  let regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/ ;

  if(fname.length==0){
    swal('Please Enter First Name')
  }

  else if(lname.length==0){
    swal('Please Enter Last Name')
  }
  else if(email.length==0){
    swal('Please Enter Last Name')
  }
  else if(!regEmail.test(email) ){
    swal('Please Enter Valid Email')
   
  }
else{
  setCompletedValue(50)

  setQetari('three')
}
 
  
  }
const qetariThree= async()=>{

  const regExp=/^\d{9,10}$/;

  let formattedPhoneNumber = phone.replace(/^\+?251?0?(\d{9})$/, "$1");
// Specifically handle numbers starting with "09" followed by 7 digits:
formattedPhoneNumber = formattedPhoneNumber.replace(/^0(\d{9})$/, "$1");

let formattedPhone = formattedPhoneNumber.replace(/^(\d{9})$/, "+251$1");

console.log(formattedPhone)

if(phone.length===0){
  swal('Please Enter Phone Number');
}

else if(!regExp.test(formattedPhoneNumber)){
  swal('Please Enter Valid Phone ');
}

else if(selectedState==0){
  swal('Please Select Country');
}

else if(selectedArea.length==0){
  swal('Please Enter Specific Location');
}
else if(!selectedWork){
  swal('Please Select What You Looking For');
}
else if(password.length==0){
  swal('Please Enter Password');
}
else if(confirmPassword.length==0){
  swal('Please Enter Confirm Password');
}
else if(confirmPassword!==password){
  swal('Confirm Password IS Not Match With Password');
}

else if(imageValue==0){
  swal('Please Upload ID or Passport');
}

else{
  try {
    const numValue=`+${formattedPhone.replace(/\D/g,'')}`;
  const confirmation= await signinPhone(numValue);
  setConfirmm(confirmation)
  setCompletedValue(75)
  alert('otp sent')
  setQetari('four')
  } catch (error) {
    console.log(error.message)
  }
}

 
    
  }
const qetariFour=async()=>{

  if(otp.length==0){
    swal('Please Enter Otp')
  }

  else{
    try {
      setCompletedValue(100)
      await confirmm.confirm(otp);
      setQetari('five')
      }
      catch (error){
        swal(error.message)
      }
  }


  }
const qetariFive=()=>{
  setQetari('six')
  }


  const wekilOnee=()=>{
    window.location.reload(false);
    setModule('one'); 
    setWekil('')
  }
  
  const wekilOne=()=>{
    setCompletedValue(20)
    setWekil('two')
  }
  

const wekilTwo=async()=>{

  let regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/ ;

  const regExp=/^\d{9,10}$/;

  let formattedPhoneNumber = phone.replace(/^\+?251?0?(\d{9})$/, "$1");
// Specifically handle numbers starting with "09" followed by 7 digits:
formattedPhoneNumber = formattedPhoneNumber.replace(/^0(\d{9})$/, "$1");

let formattedPhone = formattedPhoneNumber.replace(/^(\d{9})$/, "+251$1");

console.log(formattedPhone)



if(fname.length==0){
    swal('Please Enter First Name')
  }

  else if(lname.length==0){
    swal('Please Enter Last Name')
  }

  else if(phone.length===0){
    swal('Please Enter Phone Number');
  }
  
  else if(!regExp.test(formattedPhoneNumber)){
    swal('Please Enter Valid Phone ');
  }
  
  else if(email.length==0){
    swal('Please Enter Last Name')
  }
  else if(!regEmail.test(email) ){
    swal('Please Enter Valid Email')
   
  }

  else if(selectedOption.length==0){
    swal('Please Select Country')
  }

  else{
    try {
      const numValue=`+${formattedPhone.replace(/\D/g,'')}`;
    const confirmation= await signinPhone(numValue);
    setCompletedValue(40)
    setConfirmm(confirmation)
    alert('otp sent')
    setWekil('three')
    } catch (error) {
      console.log(error.message)
    }
      
  }



  }
const wekilThree=async()=>{

  if(otp.length==0){
    swal('Please Enter Otp')
  }

  else{
    try {
      setCompletedValue(60)
      await confirmm.confirm(otp);
      setWekil('four')
      }
      catch (error){
        swal(error.message)
      }
  }
  
  
  }
const wekilFour=()=>{

  if(selectedArea.length==0){
    swal('Please Select Specific Location')
  }

  else if(imageValue.length==0){
    swal('Please Upload ID/Passport ')
  }

  else{
    setCompletedValue(80)
    setWekil('five')
  }

 
  }
const wekilFive=()=>{

  if(password.length==0){
    swal('Please Enter Password');
  }
  else if(confirmPassword.length==0){
    swal('Please Enter Confirm Password');
  }
  else if(confirmPassword!==password){
    swal('Confirm Password IS Not Match With Password');
  }

  else{
    setCompletedValue(100)
    setWekil('six')
  }

 
  }




return (
 <div className="regtext">
<div className="regfile">

  <div className="regimagereal">

  <div className="regiimagefake">
<img src={imgTitle} alt="" />
</div>

    <div className="regiimagefakeone">
    <img src={imgHero1} className='imagerealregi' alt="" />
    </div>

    <h2>
    Weyzero
    </h2>
    <p>
    We are helping thousands of families in finding their perfect EMEBET.Let's Work Together On Emebet
    </p>

    
<div className="herobtnWork">
  <button className='btnheweregi btnreweregi'>
  Go To Home Page
  </button>
</div>

<h5>
© 2021
</h5>

  </div>

  {
   module=='one'  ?
  <div className="regpagetext">


    <div className="pagenation">

     { /* <p>0 of 4 completed</p> */ }

       <div className="line">

       </div>

    </div>

<div className="textregreal">
<div className="regiimagefakereal">
<img src={imgTitle} alt="" />
</div>
<h2>
Weyzero
</h2>
<p>
Registration  Page
</p>
</div>

<div className="rolereal">
<p>Who are you? Make sure you select your role</p>
</div>

<div onClick={()=>activeCheck()} className="inputreal inputrealemployee">
<input type="checkbox" name="" id="serategna" className='checkbox checkboxe' /> <span>I AM EMPLOYEE (ሰራተኛ)</span>
</div>
<div className="inputreal inputrealemployee" onClick={()=>activeCheckk()}>
<input type="checkbox" name="" id="qetari" className='checkbox checkboxs' /> <span>I AM EMPLOYER (ቀጣሪ)</span>
</div>
<div className="inputreal inputrealemployee" onClick={()=>activeCheckkk()}>
<input type="checkbox" name="" id="wekil" className='checkbox checkboxss' /> <span>I AM AGENT (ወኪል)</span>
</div>



<div className="regandforget">

<div className="bothdorgote">


<div className="signup">
Already have an account? <span> <Link to='/login' >Login here</Link></span> 
</div>
</div>

<div className="line">

</div>

<div className="herobtnWork">
  <button onClick={modulOne} className='btnhewereg btnrewereg'>
  Next
  </button>
</div>

</div>



  </div>
: <></>
}
  {
   module=='two'   ?
  <div className="regpagetext">


    <div className="pagenation">

       <p>1 of 6 completed</p>

       <div className="line progressbar "  >
  <div className="line1" style={{  width: `${completedValue}%` }} >

  </div>
       </div>

    </div>

<div className="textregreal textregreale1">

<h2>
Registering Employee...
</h2>

</div>



<div className="inputreal">
<input type='text' name="" value={fname} onChange={(e)=>setFname(e.target.value)} id="" className='textInputreal' placeholder='First Name' /> 
</div>
<div className="inputreal">
<input type='text' name="" value={lname} onChange={(e)=>setLname(e.target.value)} id="" className='textInputreal' placeholder='Last Name' /> 
</div>
<div className="inputreal">
<input type='number' name="" value={age} onChange={(e)=>setAge(e.target.value)} id="" className='textInputreal' placeholder='Age' /> 
</div>
<div className="inputreal">
<input type='number' name="" id="" value={phone} onChange={(e)=>setPhone(e.target.value)} className='textInputreal' placeholder='Phone Number ...911' /> 
</div>
<select id='city' value={selectedState} onChange={(e)=>setSelectedState(e.target.value)} className="inputreal selectReg">
<option  value="" > Choose City  </option>
<option  value="Addis Ababa" > Addis Ababa </option>
<option  value="Jimma" > Jimma  </option>
</select>


<div className='recaptcha'  id='recaptcha-container'></div>


<div className="regandforget">



<div className="line">

</div>

<div className="herobtnWork">
<button onClick={()=>modulOnee()} className='btnhewereg btnrewereg'>
  Prev
  </button>
  <button onClick={modulTwo} className='btnhewereg btnrewereg'>
  Next
  </button>
</div>

</div>



  </div>
: <></>
}



{
   module=='three' ?
   <div className="regpagetext">


   <div className="pagenation">

      <p>2 of 6 completed</p>

      <div className="line">
      <div className="line1" style={{  width: `${completedValue}%` }} >

</div>
      </div>

   </div>

<div className="textregreal textregreale2">

<h2>
Registering Employee...
</h2>
</div>


<div className="centerCode">
<p>
Verification Code Sent to Your Phone
</p>


<p>
የማረጋገጫ ኮድ ወደ ስልክዎ ተልኳል. ኮዱን ያስገቡ
</p>

<label htmlFor="">Code</label>
</div>


<div className="inputreal enterCode">
 
<input type='number' name="" value={otp} onChange={(e)=>setOtp(e.target.value)} id="" className='textInputreal ' placeholder='Enter Code Here' /> 
</div>


<div className="regandforget">



<div className="line">

</div>

<div className="herobtnWork">

 <button onClick={modulThree} className='btnhewereg btnrewereg'>
 Next
 </button>
</div>

</div>



 </div>
   : <></>
  }
  
  {
   module=='four' ?
<div className="regpagetext">


<div className="pagenation">

   <p>3 of 6 completed</p>

   <div className="line">
   <div className="line1" style={{  width: `${completedValue}%` }} >

</div>
   </div>

</div>

<div className="textregreal textregreale1">

<h2>
Registering Employee...
</h2>

</div>





{
  selectedState && <select id='locId' value={selectedArea}  onChange={(e)=>setSelectedArea(e.target.value)} className="inputreal selectReg">
    {
      location[selectedState].map(state=>{
return <option>{state}</option>
      })
    }
  </select>
}
<select id='religionId' value={religion} onChange={(e)=>setReligion(e.target.value)}  className="inputreal selectReg">
<option  value="" > Religion  </option>
<option  value="Orthodox" > Orthodox </option>
<option  value="Muslim" > Muslim  </option>
<option  value="Protestant" > Protestant  </option>
</select>
<select id='lang' value={language} onChange={(e)=>setLanguage(e.target.value)}  className="inputreal selectReg">
<option  value="" > Language   </option>
<option  value="Amharic" > Amharic </option>
<option  value="Oromifa" > Oromifa  </option>
<option  value="Tigregna" > Tigregna  </option>
</select>
<div className="inputreal">
<input type='text' name="" id="" value={lang} onChange={(e)=>setLang(e.target.value)} className='textInputreal' placeholder='If There Is Additional Language Please Insert' /> 
</div>
<select id='empId' value={empState} onChange={(e)=>setEmpState(e.target.value)}  className="inputreal selectReg">
<option  value="" > Employement Type   </option>
<option  value="Full Time" > Full Time </option>
<option  value="Part Time" > Part Time </option>
</select>
<select id='salaryId' value={salaryState} onChange={(e)=>setSalaryState(e.target.value)}  className="inputreal selectReg">
<option  value="" > Monthly Expected Salary   </option>
<option  value="1000-2000" > 1000-2000 </option>
<option  value="2000-3000" > 2000-3000  </option>
<option  value="2000-3000" > Nigotiable  </option>
</select>

<div className="regandforget">



<div className="line">

</div>

<div className="herobtnWork">

<button onClick={modulFour} className='btnhewereg btnrewereg'>
Next
</button>
</div>

</div>



</div>
   : <></>
  }

{
   module=='five' ?
   <div className="regpagetext">


   <div className="pagenation">
   
      <p>4 of 6 completed</p>
   
      <div className="line">
      <div className="line1" style={{  width: `${completedValue}%` }} >

</div>
      </div>
   
   </div>
   
   <div className="textregreal textregreale1">
   
   <h2>
   Registering Employee...
   </h2>
   
   </div>
   
   <div className="centerCode centerCode5">

<label htmlFor="">Select Service</label>
</div>

<Select
  
    isMulti
    isSearchable
    name="colors"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
    id='workId'
    onChange={(choice) => setSelectedWork(choice)}

    //      onChange={handleChange}
 noOptionsMessage={()=> 'Nothing Found'}
 autoFocus={true}

  />
   
 
   <select id='eduId' value={eduState} onChange={(e)=>setEduState(e.target.value)}  className="inputreal selectReg">
   <option  value="" > Education Level  </option>
   <option  value="Masters" > Masters </option>
   <option  value="Degree" > Degree  </option>
   <option  value="Gradeten" > Grade 10  </option>
   <option  value="Gradeeight" > Grade 8  </option>
   <option  value="Un Educated" > Uneducated  </option>
   </select>
   <select id='expId' value={expState} onChange={(e)=>setExpState(e.target.value)} className="inputreal selectReg">
   <option  value="" > Experience   </option>
   <option  value="More Than 5 Years" > More Than 5 Years </option>
   <option  value="More Than 2 Years" > More Than 2 Years </option>
   <option  value="More Than 1 Years" > More Than 1 Years </option>
   <option  value="None" > I don't Have any </option>
   </select>
   <select id='classId' value={classState} onChange={(e)=>setClassState(e.target.value)} className="inputreal selectReg">
   <option  value="" > Do You Take Class   </option>
   <option  value="Yes" > Yes </option>
   <option  value="No" > No  </option>
   </select>
  
   
   <div className="regandforget">
   
   
   
   <div className="line">
   
   </div>
   
   <div className="herobtnWork">
   <button onClick={modulThreeBack} className='btnhewereg btnrewereg'>
   Prev
   </button>
   <button onClick={modulFive} className='btnhewereg btnrewereg'>
   Next
   </button>
   </div>
   
   </div>
   
   
   
   </div>
  
   : <></>
  }

{
   module=='six' ?
   <div className="regpagetext">


   <div className="pagenation">
   
      <p>5 of 6 completed</p>
   
      <div className="line">
      <div className="line1" style={{  width: `${completedValue}%` }} >

</div>
      </div>
   
   </div>
   
   <div className="textregreal textregreale6">
   
   <h2>
   Registering Employee...
   </h2>
   
   </div>
   
 
   <select id='kidId' value={child} onChange={(e)=>setChild(e.target.value)} className="inputreal selectReg">
   <option  value="" > Do you have children?  </option>
   <option  value="Yes" > Yes </option>
   <option  value="No" > No  </option>
   </select>
   <select id='liveId' value={live} onChange={(e)=>setLive(e.target.value)} className="inputreal selectReg">
   <option  value="" > Live In Or Live Out   </option>
   <option  value="Live In" > Live In </option>
   <option  value="Live Out" > Live Out  </option>
   </select>
 
   <div className="centerCode centerCode5">
 <p>
 Tell us what you can do (ስለ እርሶ ትንሽ ይንገሩን)
 </p>
  </div>
   
  <div className="inputreal inputreal6">
<textarea type='text' multiple name="" value={self} onChange={(e)=>setSelf(e.target.value)} id="" className='textInputreal textInputreal6' placeholder='Tell Us About Yourself ' /> 
</div>


<div className="centerCode centerCode5">
 <p>
 Profile Image (ፎቶ)
 </p>
  </div>

  <div className="inputreal">
<input type='file' name="" id=""  onChange={(e)=>setIdValue(e.target.files[0])} className=' textInputFile'  /> 
</div>

<div className="centerCode centerCode5">
 <p>
 ID or Passport መታወቂያ ወይም ፓስፖርት
 </p>
  </div>
  <div className="inputreal">
<input type='file' name=""  onChange={(e)=>setImageValue(e.target.files[0])}  id="" className='textInputFile' /> 
</div>

   <div className="regandforget">
   
   
   
   <div className="line">
   
   </div>
   
   <div className="herobtnWork">
   <button onClick={modulFour} className='btnhewereg btnrewereg'>
   Prev
   </button>
   <button onClick={modulSix} className='btnhewereg btnrewereg'>
   Next
   </button>
   </div>
   
   </div>
   
   
   
   </div>
   : <></>
  }

  {
    module=='seven' ? 
<div className="regpagetext">


<div className="pagenation">

   <p>6 of 6 completed</p>

   <div className="line">
   <div className="line1" style={{  width: `${completedValue}%` }} >

</div>
   </div>

</div>

<div className="textregreal textregreale1">

<h2>
Registering Employee...
</h2>

</div>



<div className="inputreal">
<input type='email' name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)} className='textInputreal' placeholder='Email' /> 
</div>

<div className="inputreal">
<input type={showPassword ? 'text' : 'password'} name="" id="" onChange={(e)=>setPassword(e.target.value)} className='textInputreal' placeholder='Password' /> 
<button className="password-viewer-icon" onClick={handleShowPasswordToggle}>
        {showPassword ? <FaEyeSlash /> :  <FaEye />}
      </button>
</div>
<div className="inputreal">
<input type={confirmShowPassword ? 'text' : 'password'} name="" id="" onChange={(e)=>setConfirmPassword(e.target.value)} className='textInputreal' placeholder="Confirm Password" /> 
<button className="password-viewer-icon" onClick={handleShowConfirmPasswordToggle}>
        {confirmShowPassword ? <FaEyeSlash /> :  <FaEye />}
      </button>
</div>


<div className="regandforget">

<div className="agreeTerm"  onClick={()=>activeCheckTerm()}>

<input type="checkbox" className='checkboxTerm' name="" id="" />

 <p> I agree to the</p> <Link className='linkTerm' to='/term'>Terms and conditions</Link> <p>of the emebet.net</p> 
       
</div> 

<div className="line">

</div>

<div className="herobtnWork">
<button onClick={modulFive} className='btnhewereg btnrewereg'>
Prev
</button>
<button onClick={submit} className='btnhewereg btnrewereg'>
Submit
</button>
</div>



                                             

</div>



</div>
    : <></>
  }



{
   qetari=='two'    ?
  <div className="regpagetext">


    <div className="pagenation">

       <p>1 of 4 completed</p>

       <div className="line progressbar "  >
  <div className="line1" style={{  width: `${completedValue}%` }} >

  </div>
       </div>

    </div>

<div className="textregreal textregreale1">

<h2>
Registering Employer
</h2>

</div>
<div className="centerCode centerCode5">
<p>
Add Your Personal info
</p>
</div>

<div className="inputreal">
<input type='text' name="" id="" value={fname} onChange={(e)=>setFname(e.target.value)} className='textInputreal' placeholder='First Name' /> 
</div>
<div className="inputreal">
<input type='text' name="" id="" value={lname} onChange={(e)=>setLname(e.target.value)} className='textInputreal' placeholder='Last Name' /> 
</div>
<div className="inputreal">
<input type='email' name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)} className='textInputreal' placeholder='Email' /> 
</div>


<div className="regandforget">



<div className="line">

</div>

<div className="herobtnWork">
<button onClick={qetariOnee} className='btnhewereg btnrewereg'>
  Prev
  </button>
  <button onClick={qetariTwo} className='btnhewereg btnrewereg'>
  Next
  </button>
</div>

</div>



  </div>
: <></>
}
{
   qetari=='three'    ?
  <div className="regpagetext">


<div className="pagenation">
   
   <p>2 of 4 completed</p>

   <div className="line progressbar "  >
  <div className="line1" style={{  width: `${completedValue}%` }} >

  </div>
       </div>

</div>

<div className="textregreal textregreale6">

<h2>
Registering Employee...
</h2>

</div>


<div className="inputreal">
<input type='number' name="" id="" className='textInputreal' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Phone Number ...911' /> 
</div>

<select id='cityId' value={selectedState} onChange={(e)=>setSelectedState(e.target.value)} className="inputreal selectReg">
<option  value="" >Choose City   </option>
<option  value="Addis Ababa" > Addis Ababa </option>
<option  value="Jimma" > Jimma  </option>
</select>

{
  selectedState && <select id='locId' value={selectedArea}  onChange={(e)=>setSelectedArea(e.target.value)} className="inputreal selectReg">
    {
      location[selectedState].map(state=>{
return <option>{state}</option>
      })
    }
  </select>
}




<div className="centerCode centerCode5">
<p>
What are you looking for?
</p>
</div>
<Select
  
    isMulti
    isSearchable
    name="colors"
    options={optionss}
  //  defaultValue={selectedWork}
    className="basic-multi-select"
    classNamePrefix="select"
    id='workerId'
    onChange={(choice) => setSelectedWork(choice)}

    //      onChange={handleChange}
 noOptionsMessage={()=> 'Nothing Found'}
 autoFocus={true}

  />
   
   <div className="inputreal">
<input type={showPassword ? 'text' : 'password'} name="" id="" onChange={(e)=>setPassword(e.target.value)} className='textInputreal' placeholder='Password' /> 
<button className="password-viewer-icon" onClick={handleShowPasswordToggle}>
        {showPassword ? <FaEyeSlash /> :  <FaEye />}
      </button>
</div>
<div className="inputreal">
<input type={confirmShowPassword ? 'text' : 'password'} name="" id="" onChange={(e)=>setConfirmPassword(e.target.value)} className='textInputreal' placeholder="Confirm Password" /> 
<button className="password-viewer-icon" onClick={handleShowConfirmPasswordToggle}>
        {confirmShowPassword ? <FaEyeSlash /> :  <FaEye />}
      </button>
</div>

<div className="centerCode centerCode5">
<p>
ID or Passport መታወቂያ ወይም ፓስፖርት
</p>
</div>

<div className="inputreal">
<input type='file' name="" onChange={(e)=>setImageValue(e.target.files[0])} id="" className=' textInputFile'  /> 
</div>

<div className='recaptcha'  id='recaptcha-container'></div> 

<div className="regandforget">



<div className="line">

</div>

<div className="herobtnWork">
<button onClick={qetariOne} className='btnhewereg btnrewereg'>
  Prev
  </button>
  <button onClick={qetariThree} className='btnhewereg btnrewereg'>
  Next
  </button>
</div>

</div>



  </div>
: <></>
}

{
   qetari=='four'    ?
   <div className="regpagetext">


   <div className="pagenation">

      <p>3 of 4 completed</p>

      <div className="line progressbar "  >
  <div className="line1" style={{  width: `${completedValue}%` }} >

  </div>
       </div>

   </div>

<div className="textregreal textregreale2">

<h2>
Registering Employee...
</h2>
</div>


<div className="centerCode">
<p>
Verification Code Sent to Your Phone
</p>


<p>
የማረጋገጫ ኮድ ወደ ስልክዎ ተልኳል. ኮዱን ያስገቡ
</p>

<label htmlFor="">Code</label>
</div>


<div className="inputreal enterCode">
 
<input type='number' name="" value={otp} onChange={(e)=>setOtp(e.target.value)} id="" className='textInputreal ' placeholder='Enter Code Here' /> 
</div>


<div className="regandforget">



<div className="line">

</div>

<div className="herobtnWork">
<button onClick={qetariTwo} className='btnhewereg btnrewereg'>
 Prev
 </button>
 <button onClick={qetariFour} className='btnhewereg btnrewereg'>
 Next
 </button>
</div>

</div>



 </div>
   : 
   <></>
}

{
   qetari=='five'    ?
<div className="regpagetext">


<div className="pagenation">

   <p>4 of 4 completed</p>

   <div className="line progressbar "  >
  <div className="line1" style={{  width: `${completedValue}%` }} >

  </div>
       </div>

</div>

<div className="textregreal textregreale1">

<h2>
Registering Employee...
</h2>

</div>



<div className="centerCode centerCode5">
<p>
Thank you for your time! You have reached to the end, Please Confirm your registration by accepting our terms and conditions!
</p>
</div>

<div className="regandforget">

<div className="agreeTerm"  onClick={()=>activeCheckTerm()}>

<input type="checkbox" className='checkboxTerm' name="" id="" />

 <p> I agree to the</p> <Link className='linkTerm' to='/term'>Terms and conditions</Link> <p>of the emebet.net</p> 
       
</div>

<div className="line">

</div>

<div className="herobtnWork">
<button onClick={qetariThree} className='btnhewereg btnrewereg'>
Prev
</button>
<button onClick={submitQetari} className='btnhewereg btnrewereg'>
Submit
</button>
</div>



                                             

</div>



</div>
   : 
   <></>
}

{
   wekil=='two'    ?

   <div className="regpagetext">


<div className="pagenation">

   <p>1 of 5 completed</p>

   <div className="line progressbar "  >
  <div className="line1" style={{  width: `${completedValue}%` }} >

  </div>
       </div>

</div>

<div className="textregreal textregreale1">

<h2>
Registering Agent...
</h2>

</div>

<div className="inputreal">
<input type='text' name="" id="" value={fname} onChange={(e)=>setFname(e.target.value)} className='textInputreal' placeholder='First Name' /> 
</div>
<div className="inputreal">
<input type='text' name="" id="" value={lname} onChange={(e)=>setLname(e.target.value)} className='textInputreal' placeholder='Last Name' /> 
</div>

<div className="inputreal">
<input type='number' name="" id="" value={phone} onChange={(e)=>setPhone(e.target.value)} className='textInputreal' placeholder='Phone Number ...911' /> 
</div>

<div className="inputreal">
<input type='email' name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)} className='textInputreal' placeholder='Email' /> 
</div>

<select id='cityyId' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="inputreal selectReg">
<option  value="" >Choose City   </option>
<option  value="Addis Ababa" > Addis Ababa </option>
<option  value="Jimma" > Jimma  </option>
</select>

<div className='recaptcha'  id='recaptcha-container'></div> 

<div className="regandforget">



<div className="line">

</div>

<div className="herobtnWork">
<button onClick={wekilOnee} className='btnhewereg btnrewereg'>
Prev
</button>
<button onClick={wekilTwo} className='btnhewereg btnrewereg'>
Next
</button>
</div>

</div>

</div>

   : 
   <></>
}
{
   wekil=='three'    ?
   <div className="regpagetext">


   <div className="pagenation">

      <p>2 of 5 completed</p>

      <div className="line progressbar "  >
  <div className="line1" style={{  width: `${completedValue}%` }} >

  </div>
       </div>

   </div>

<div className="textregreal textregreale2">

<h2>
Registering Agent...
</h2>
</div>


<div className="centerCode">
<p>
Verification Code Sent to Your Phone
</p>


<p>
የማረጋገጫ ኮድ ወደ ስልክዎ ተልኳል. ኮዱን ያስገቡ
</p>

<label htmlFor="">Code</label>
</div>


<div className="inputreal enterCode">
 
<input type='number' name="" value={otp} onChange={(e)=>setOtp(e.target.value)} id="" className='textInputreal ' placeholder='Enter Code Here' /> 
</div>


<div className="regandforget">



<div className="line">

</div>

<div className="herobtnWork">
<button onClick={wekilOne} className='btnhewereg btnrewereg'>
 Prev
 </button>
 <button onClick={wekilThree} className='btnhewereg btnrewereg'>
 Next
 </button>
</div>

</div>



 </div>
   : 
   <></>
}
{
   wekil=='four'    ?
<div className="regpagetext">


<div className="pagenation">

   <p>3 of 5 completed</p>

   <div className="line progressbar "  >
  <div className="line1" style={{  width: `${completedValue}%` }} >

  </div>
       </div>

</div>

<div className="textregreal textregreale1">

<h2>
Registering Agent...
</h2>

</div>



{
  selectedOption && <select id='locId' value={selectedArea}  onChange={(e)=>setSelectedArea(e.target.value)} className="inputreal selectReg">
    {
      location[selectedOption].map(state=>{
return <option>{state}</option>
      })
    }
  </select>
}


<div  className="inputreal">
<input type='number' name="" id="" value={legalNum} onChange={(e)=>setLegalNum(e.target.value)} className='textInputreal' placeholder='legal Number' /> 
</div>
<div className="inputreal">
<input type='number' name="" id="" value={tin} onChange={(e)=>setTin(e.target.value)} className='textInputreal' placeholder='Tin Number' /> 
</div>



<div className="centerCode centerCode5">
<p>
ID Image
</p>
</div>

<div className="inputreal">
<input type='file' name="" id=""  onChange={(e)=>setImageValue(e.target.files[0])}  className=' textInputFile'  /> 
</div>

<div className="centerCode centerCode5">
<p>
License Image
</p>
</div>

<div className="inputreal">
<input type='file' name="" onChange={(e)=>setTinValue(e.target.files[0])} id="" className=' textInputFile'  /> 
</div>


<div className="regandforget">



<div className="line">

</div>

<div className="herobtnWork">
<button onClick={wekilTwo} className='btnhewereg btnrewereg'>
Prev
</button>
<button onClick={wekilFour} className='btnhewereg btnrewereg'>
Next
</button>
</div>

</div>

</div>
   : 
   <></>
}
{
   wekil=='five'    ?
<div className="regpagetext">


<div className="pagenation">

   <p>4 of 5 completed</p>

   <div className="line progressbar "  >
  <div className="line1" style={{  width: `${completedValue}%` }} >

  </div>
       </div>

</div>

<div className="textregreal textregreale1">

<h2>
Registering Agent...
</h2>

</div>






<div className="inputreal">
<input type={showPassword ? 'text' : 'password'} name="" id="" onChange={(e)=>setPassword(e.target.value)} className='textInputreal' placeholder='Password' /> 
<button className="password-viewer-icon" onClick={handleShowPasswordToggle}>
        {showPassword ? <FaEyeSlash /> :  <FaEye />}
      </button>
</div>
<div className="inputreal">
<input type={confirmShowPassword ? 'text' : 'password'} name="" id="" onChange={(e)=>setConfirmPassword(e.target.value)} className='textInputreal' placeholder="Confirm Password" /> 
<button className="password-viewer-icon" onClick={handleShowConfirmPasswordToggle}>
        {confirmShowPassword ? <FaEyeSlash /> :  <FaEye />}
      </button>
</div>



<div className="regandforget">


<div className="line">

</div>

<div className="herobtnWork">
<button onClick={wekilThree} className='btnhewereg btnrewereg'>
Prev
</button>
<button onClick={wekilFive} className='btnhewereg btnrewereg'>
Next
</button>
</div>



                                             

</div>



</div>
   : 
   <></>
}
{
   wekil=='six'    ?
<div className="regpagetext">


<div className="pagenation">

   <p>5 of 5 completed</p>

   <div className="line progressbar "  >
  <div className="line1" style={{  width: `${completedValue}%` }} >

  </div>
       </div>

</div>

<div className="textregreal textregreale1">

<h2>
Registering Employee...
</h2>

</div>



<div className="centerCode centerCode5">
<p>
Thank you for your time! You have reached to the end, Please Confirm your registration by accepting our terms and conditions!
</p>
</div>

<div className="regandforget">

<div className="agreeTerm"  onClick={()=>activeCheckTerm()}>

<input type="checkbox" className='checkboxTerm' name="" id="" />

 <p> I agree to the</p> <Link className='linkTerm' to='/term'>Terms and conditions</Link> <p>of the emebet.net</p> 
       
</div>

<div className="line">

</div>

<div className="herobtnWork">
<button onClick={wekilFour} className='btnhewereg btnrewereg'>
Prev
</button>
<button onClick={submitWekil} className='btnhewereg btnrewereg'>
Submit
</button>
</div>



                                             

</div>



</div>
   : 
   <></>
}



</div>
 </div>
)
}

export default Register