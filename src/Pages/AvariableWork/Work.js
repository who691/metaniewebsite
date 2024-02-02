import React, { createContext, useEffect, useState } from 'react'

import './Work.css'

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

import userImg from '../../component/Assets/user2.png'


const Work = () => {

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

  const [rating,setRating]=useState(null);
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


  const refDatabase=collection(db,'qetari');

  const imageRef=ref(storage,'images/')

  useEffect(()=>{

   
       window.scrollTo(0,0)
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




   setModule('two')

   let queryConditions = []; // Start with an empty array to collect conditions


   if (serviceState.length > 0) {
     queryConditions.push( where('selectedWork' , 'array-contains-any' , [  { label: serviceState, value: serviceState }] ) );
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








  return (
    <div className='employe'>

     <div className="herosec10">
      
     </div>
     <div className="herosec20">
         
         <h3>
         Available Emebets
         </h3>

        <button onClick={increaseSize}>
          
       Advance Search With Filters 
          <MdOutlineArrowDropDown />

           </button>


<div className="searchFilter">

<div className="searchdiv">


<div className="selectSearch">
<select value={serviceState} onChange={(e)=>setServiceState(e.target.value)} className="inputreal selectReg">
<option  value="" >Select Service   </option>
<option  value="private nurse" > Private Nurse </option>
<option  value="adult care" > Adult Care </option>
<option  value="baby sitter" > Baby Sitter</option>
<option  value="house keeper" > House Keeper </option>
<option  value="tutor" > Tutor </option>
<option  value="cleaner" > Cleaner </option>
<option  value="Waitress" > Waitress </option>
<option  value="cooking" > Cooking </option>
<option  value="care for special needs" > Care for Special Needs </option>
<option  value="maid" > Maid </option>
<option  value="hair stylist" > Hair Stylist </option>
<option  value="receptionist" > Receptionist </option>
<option  value="sales" >Sales </option>
<option  value="chef (ሼፍ)" > Chef (ሼፍ) </option>
<option  value="accountant" > Accountant </option>
<option  value="secretary" > Secretary </option>
</select>
</div>


</div>

<div className="serchWorker">

<button onClick={searchAll}>
  Search
</button>

</div>

</div>


     </div>


{
module === 'one' ? <div className="herosec334">

<div className="workerrs">


<div className="workerrHerooo">
  


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
   <div className="conworkerrWork">    


<div className="conworkerrWorkOne">

<img src={userImg} style={{height:50}}  />

<h2 className='conWorkH'>
{user.fname + ' ' + user.lname}
</h2>
</div>


<h4>
 From {user.selectCity}, {user.selectedArea}
</h4>
<h5 style={{display:'flex',textAlign:'center',justifyContent:'center',alignItems:'center'}}>
{
  user.selectedWork?.map((value) => (
   <h5 > Looking for {  value.value + ' ' + '*'  }  </h5>
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



  )
})}




</div>


<div className="moreWorker">

<button  onClick={loadMore}>
  Find More Workers
</button>

</div>


</div>

</div> 

:
 <></>    

}


{
  module == 'two' ? <div className="herosec334">

  <div className="workerrs">
  
  
  <div className="workerrHerooo">
    
  
  
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
        ) :     users.map((user,key)=>{
    return(
      
      <div key={key}>
     <div className="conworkerrWork">    
  
  
  <div className="conworkerrWorkOne">
  
  <img src={userImg} style={{height:50}}  />
  
  <h2 className='conWorkH'>
  {user.fname + ' ' + user.lname}
  </h2>
  </div>
  
  
  <h4>
   From {user.selectCity}, {user.selectedArea}
  </h4>
  <h5 style={{display:'flex',textAlign:'center',justifyContent:'center',alignItems:'center'}}>
  {
    user.selectedWork?.map((value) => (
     <h5 > Looking for {  value.value + ' ' + '*'  }  </h5>
    ))
    
  }
  {
    user.selectedWorkApp?.map((value) => (
     <h5 > Looking for {  value + ' ' + '*'  }  </h5>
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
  
  
  
    )
  })}
  
  
  
  
  </div>
  
  
  <div className="moreWorker">
  
  <button  onClick={loadMoreSearch}>
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

export default Work