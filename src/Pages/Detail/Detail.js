import React, { useContext,useEffect, useState } from 'react'

import './Detail.css'

import { Link,useLocation } from 'react-router-dom'

import worker1 from '../../component/Assets/worker1.jpg'
import { doc, getDoc, getDocs ,DocumentReference, collection, addDoc } from 'firebase/firestore'
import { db } from '../../Firebase-Config'
import Star from '../Star/Star'

import {FaStar} from 'react-icons/fa'

import swal from 'sweetalert';


const Detail = (props) => {

  

  const location=useLocation();

console.log(props,'props')
// console.log(location.state,'props')

const data=location.state?.data;

const [dataDetaill,setDataDetail]=useState([])



useEffect(()=>{

  window.scrollTo(0, 0);


 const dataDetail=  doc(db,'userall',location.state) 
  const getFile= async()=>{
   
    const data= await getDoc(dataDetail)
     setDataDetail(data.data())

  }

  
  getFile()

},[])


const [rating,setRating]=useState(null);
const [hover,setHover]=useState(null);

const ratingDatabase=collection(db,'rating');


const handelRating = async()=>{

  await  addDoc(ratingDatabase, {
     rating: Number(rating) , 
    fname: dataDetaill.fname 
    , lname: dataDetaill.lname  })
  swal('Tnx for giving us rating 😊') ;

  

}

 
  
  { /*
  let regEx = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/ ;
  //  const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
  e.preventDefault()
  if(fname.length===0){
    swal('Please Enter Name')
  }
 else if(lname.length===0  ){
    swal('Please Enter Email')
   
  }
 else if(!regEx.test(email) ){
    swal('Please Enter Valid Email')
   
  }  
 }   
 */
}


  return (
    <div >


        <div >
          <div className='detail'>
    <div className="bgDetail">


<div className="theRest">

<div className="allInfoWorkk">   
<div className="religion">

<h4>
  Religion
  </h4>
  <p>
    {dataDetaill.religion}
  </p>
  
</div>
<div className="religion">

<h4>
Language
  </h4>
  <p>
  {dataDetaill.language + ' , ' + dataDetaill.lang }
  </p>
  
</div>

<div className="religion">

<h4>
Employee Type
  </h4>
  <p>
  {dataDetaill.isPartime}
  </p>
  
</div>
<div className="religion">

<h4>
Residence

  </h4>
  <p>
  {dataDetaill.liveIn}
  </p>
  
</div>

<div className="religion">

<h4>
Student
  </h4>
  <p>
  {dataDetaill.haveclass}
  </p>
  
</div>
</div>

<div className="allInfoWorkk">
  
<div className="moreWorker">

<div className="conworkerrr">
<img src={dataDetaill.urlId} className='workerrrsimage' alt="" />
<h2>
{dataDetaill.fname + ' ' + dataDetaill.lname}
</h2>
<h3 className='yearrrs'>
{dataDetaill.age}
</h3>
<h4>
{dataDetaill.country}, {dataDetaill.cityId}
</h4>
<h5>
{ 
 dataDetaill.workType?.map((value) => (
  <p> {  value.value + ' ' + '*'  }  </p>
 ))
  }
  { 
 dataDetaill.workTypeApp?.map((value) => (
  <p> {  value + ' ' + '*'  }  </p>
 ))
  }
</h5>
<div className="herobtnWork">
  <button className='btnhewerrr btnrewerrr'>
 <a href="tel:+251930104785">call us</a>       
  </button>
</div>
</div>



</div>

</div>

<div className="allInfoWorkk">   
<div className="religion">

<h4>
  Education Level
  </h4>
  <p>
  {dataDetaill.Education}
  </p>
  
</div>
<div className="religion">

<h4>
Expected Salary
  </h4>
  <p>
  {dataDetaill.salary}
  </p>
  
</div>

<div className="religion">

<h4>
Services
  </h4>
  <p style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
{ 
dataDetaill.workType?.map((value) => (
  <h5> {  value.value + ' ' + '~'  }  </h5>
 ))
  }

{ 
dataDetaill.workTypeApp?.map((value) => (
  <h5> {  value + ' ' + '~'  }  </h5>
 ))
  }
  </p>
  
</div>
<div className="religion">

<h4>
Children
  </h4>
  <p>
  {dataDetaill.haveChild}
  </p>
  
</div>

<div className="religion">

<h4>
Experience

  </h4>
  <p>
  {dataDetaill.haveExpireance}
  </p>
  
</div>
</div>


</div>


<div className="skilldetail">

<div className="skillOne">

<h4>
Skill
</h4>
<p>
{dataDetaill.tellAbout}
</p>

</div>

</div>
     


<div className="rating">
  <h2 className='ratingText'>
    Give us your rating
  </h2>


<div className="ratingStar">
{[...Array(5)].map((star,index)=>{
    const currentRating = index + 1 ;
return(
  <label className='label' htmlFor="">
    <input
    name='rating'
    type="radio" 
    value={currentRating}
   onClick={()=>setRating(currentRating)}
    />
    <FaStar
     className='star' 
     size={50}
     color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9' }
     onClick={()=>  setRating(currentRating) }
     onMouseEnter={()=>setHover(currentRating)}
     onMouseLeave={ ()=>setHover(null)}
     />
  </label>
)
})}
</div>


<button className='ratingBtn' onClick={ handelRating } >Give Rating</button>

</div>

  

</div>
          </div>
          </div>





    </div>
  )
}

export default Detail