import React, { createContext, useEffect, useState } from 'react'

import { MdOutlineArrowDropDown } from "react-icons/md";

import worker1 from '../../component/Assets/worker1.jpg'
import worker2 from '../../component/Assets/worker2.jpg'
import worker3 from '../../component/Assets/worker3.jpg'
import worker4 from '../../component/Assets/worker4.jpg'
import worker5 from '../../component/Assets/worker5.jpg'
import worker6 from '../../component/Assets/worker6.jpg'
import worker7 from '../../component/Assets/worker7.png'
import worker8 from '../../component/Assets/worker8.jpeg'
import avater from '../../component/Assets/avatar-removebg-preview.png'
import workerwr from '../../component/Assets/workwr.png'

import { db, storage } from '../../Firebase-Config';
import { and, collection, doc, getDocs, limit, or, query, startAfter, where } from 'firebase/firestore';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { Link,useNavigate } from 'react-router-dom';
import {FaStar} from 'react-icons/fa'

import { RotatingLines } from 'react-loader-spinner';

import './EmployeHome.css'

const EmployeHome = () => {
    const [size,setSize]=useState(false)

    const [dataList,setDataList]=useState([])
    const [nextDataList,setNextDataList]=useState(null)
    const [imageList,setImageList]=useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [lastDocSnapshot, setLastDocSnapshot] = useState(null);
    const [lastDocSnapshotSearch, setLastDocSnapshotSearch] = useState(null);
  
    const [selectedState,setSelectedState]=useState('');
    const [selectedArea,setSelectedArea]=useState('');
    const [age,setAge]=useState('');
    const [empState, setEmpState] = useState('');
    const [salaryState, setSalaryState] = useState('');
    const [religion, setReligion] = useState('');
    const [language, setLanguage] = useState('');
    const [classState,setClassState] = useState('');
    const [expState,setExpState] = useState('');
    const [child,setChild] = useState('');
    const [live,setLive] = useState('');
  
    const [serviceState, setServiceState] = useState('');
  
    const [rating,setRating]=useState(5);
    const [hover,setHover]=useState(null);
    
    const [users,setUsers]=useState([]);
  
    const [module,setModule]=useState('one')
  
    const location={
      'Addis Ababa': ['Select Location','Lebu','Kaliti','Megenagna'],
      'Jimma':['Select Location', 'Ajip','Saris','Qochi' ]
    }
  
  
    const increaseSize=()=>{
  
  
      const herosec20=document.querySelector('.herosec20');
      const searchFilter=document.querySelector('.searchFilter');
  
      if(size==false){
        herosec20.style='height:600px;';
        searchFilter.style='display:flex;';
        setSize(true)
      }
  
      else if(size==true){
        herosec20.style='height:200px;';
        searchFilter.style='display:none;';
        setSize(false)
      }
      
  
    }
  
  
    const refDatabase=collection(db,'userall');
  
    const imageRef=ref(storage,'images/')
  
    useEffect(()=>{
  
     
  
      getData()
  
  
    },[])
  
    const getData=async()=>{
  
      setIsLoading(true);
  
      const q=query(refDatabase,
          // orderBy(),
          // startAfter(),
           limit(8))
  
      const dataaa= await getDocs(q);
    //  setUser(dataaa.docs.map((doc)=>({...doc.data(),id:doc.id})))
      setDataList(dataaa.docs.map((doc)=>({...doc.data(),id:doc.id})))
      setLastDocSnapshot(dataaa.docs[dataaa.docs.length - 1]);
  
      setIsLoading(false);
  
    }
  
  
  
    const navigate= useNavigate();
  
  
  
  
  
  
    const infoWorker=async(id)=>{
  
      const fileDetail= await doc(db,'userall',id)
   
      navigate('/detail',{state:id})
  
     // window.location(detailPage)
  
    }
  
  
  
    const loadMore=async()=>{
  
      if (!lastDocSnapshot || isLoading) return alert('there is no data');
      setIsLoading(true);
      const q =  query(refDatabase,   startAfter(lastDocSnapshot),limit(8));
      const dataa =await getDocs(q);
     // setData([...data, ...dataa.docs.map((doc)=>({...doc.data(),id:doc.id}))]);
      setDataList([ ...dataa.docs.map((doc)=>({...doc.data(),id:doc.id}))]);
      setLastDocSnapshot(dataa.docs[dataa.docs.length - 1]);
      setIsLoading(false);
  
    }
  
  
    const searchAll=async()=>{
  
  
      const ageRangeValues = age.split("-");
      let minimumAge = 0;
      let maxAge = 0;
      let ageNum = [];
  
     
     
      if (ageRangeValues.length > 1) {
        minimumAge = parseInt(ageRangeValues[0]);
        maxAge = parseInt(ageRangeValues[1]);
        
      }
      
      console.log(minimumAge)
  
  
     setModule('two')
  
     let queryConditions = []; // Start with an empty array to collect conditions
  
     if (salaryState.length > 0) {
       queryConditions.push(where('salary', '==', salaryState));
     }
     
     if (child.length > 0) {
       queryConditions.push(where('haveChild', '==', child));
     }
  
     if (religion.length > 0) {
       queryConditions.push(where('religion' , '==' , religion));
     }
     if (serviceState.length > 0) {
       queryConditions.push( where('workType' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) );
     }
     if (selectedArea.length > 0) {
       queryConditions.push(where('cityId' , '==' , selectedArea));
     }
     if (selectedState.length > 0) {
       queryConditions.push(where('country' , '==' , selectedState));
     }
     if (classState.length > 0) {
       queryConditions.push(where('haveclass' , '==' , classState));
     }
     if (expState.length > 0) {
       queryConditions.push(where('haveExpireance' , '==' , expState));
     }
     if (language.length > 0) {
       queryConditions.push(where('language' , '==' , language));
     }
     if (empState.length > 0) {
       queryConditions.push(where('isPartime' , '==' , empState));
     }
     if (live.length > 0) {
       queryConditions.push(where('liveIn' , '==' , live));
     }
     if (age.length > 0) {
       queryConditions.push(where('age' , '>=' , minimumAge) , where('age' , '<=' , maxAge));
     }
     
     // ... continue adding other conditions similarly
     
     const queryCondition = queryConditions.length > 0
       ? and(...queryConditions) // Combine conditions using and()
       : null;
     
  
       const q = query(refDatabase, queryCondition);
            
      const dataSearch= await getDocs(q);
      setUsers(dataSearch.docs.map((doc)=>({...doc.data(),id:doc.id})))
      setLastDocSnapshotSearch(dataSearch.docs[dataSearch.docs.length - 1]);
      setIsLoading(false);
  // console.log(agea)
    }
  
    const loadMoreSearch=async()=>{
      if (!lastDocSnapshotSearch || isLoading) return alert('there is no data');
      setIsLoading(true);
      const q =  query(refDatabase, where('salary' , '==' , '1000-2000'),  startAfter(lastDocSnapshotSearch),limit(8));
      const dataSearch =await getDocs(q);
     // setData([...data, ...dataa.docs.map((doc)=>({...doc.data(),id:doc.id}))]);
      setUsers([ ...dataSearch.docs.map((doc)=>({...doc.data(),id:doc.id}))]);
      setLastDocSnapshotSearch(dataSearch.docs[dataSearch.docs.length - 1]);
      setIsLoading(false);
  
    }
  

    const goToEmploye=()=>{
        navigate('/employe')
    }
  
  
  
  
  
  
  
    return (
      <div className='employe'>
  
     
  {
  module === 'one' ? <div className="herosec33">
  
  <div className="workerrs">
  <h2>
  Available Workers
  </h2>
  <p>ALL OF OUR LISTED WORKERS ARE IN ETHIOPIA AND WAITING FOR YOU TO CONTACT THEM</p>
  
  
  <div className="workerrHero">
    
  
  
  {  isLoading ? (
          <div>
            
            <RotatingLines
    visible={true}
    height="96"
    width="96"
    color="grey"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
  
          </div> 
        ) :     dataList.map((user,key)=>{
    return(
      
      <div key={key}>
     <div className="conworkerr">    
  <img key={key} src={user.urlId} className='workerrsimage' alt="" />
  <h2>
  {user.fname + ' ' + user.lname}
  </h2>
  <h3 className='yearrs'>
   {user.age} years old
  </h3>
  <h4>
  {user.country}, {user.cityId}
  </h4>
  <h5 style={{display:'flex',textAlign:'center',justifyContent:'center',alignItems:'center'}}>
  {
    user.workType?.map((value) => (
     <h5 > {  value.value + ' ' + '*'  }  </h5>
    ))
    
  }
  </h5>
  
  
   <h5 style={{display:'flex',textAlign:'center',justifyContent:'center',alignItems:'center'}}>
  {[...Array(5)].map((star, index)=>{
  return(
    <label className='lable' htmlFor="">
      <input
      name='rating'
      type="radio" 
      value={index + 1} // Use index + 1 for values 1 to 5
          checked={index + 1 === rating} // Check the 5th star by default
          onClick={() => setRating(index + 1)}
      />
      <FaStar
       className='star' 
       size={30}
       color={ index + 1 <= rating ? '#ffc107' : '#e4e5e9' }
   
       />
    </label>
  )
  })}
  </h5>
  
  
  
  <div onClick={()=>infoWorker(user.id)} className="herobtnWorkr">
      <button  className='btnhewerr btnrewerr'>
    View Profile
      </button>
    </div>
    </div>
        </div>
  
  
  
    )
  })}
  
  
  
  
  </div>
  
  
  <div className="moreWorker">
  
  <button  onClick={goToEmploye}>
    Find More Workers
  </button>
  
  </div>
  
  
  </div>
  
  </div> 
  
  :
   <></>    
  
  }
  

  
      </div>
    )
}

export default EmployeHome