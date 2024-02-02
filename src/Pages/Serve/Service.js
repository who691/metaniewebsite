import React,{ useEffect } from 'react'

import './Service.css'

import image1 from '../../component/Assets/icons/nurse.png'
import image2 from '../../component/Assets/icons/old-people_3689125-removebg-preview.png'
import image3 from '../../component/Assets/icons/changer_2219870-removebg-preview.png'
import image4 from '../../component/Assets/icons/house keeper.png'
import image5 from '../../component/Assets/icons/teacher_10618283-removebg-preview.png'
import image6 from '../../component/Assets/icons/cleaner_1886856-removebg-preview.png'
import image7 from '../../component/Assets/icons/waiter_6103215-removebg-preview.png'
import image8 from '../../component/Assets/icons/cooker.png'
import image9 from '../../component/Assets/icons/blogger_5449026-removebg-preview.png'
import image10 from '../../component/Assets/icons/caregiver_2512441-removebg-preview.png'
import image11 from '../../component/Assets/icons/housekeeper_6966743-removebg-preview.png'
import image14 from '../../component/Assets/icons/hair_9951559-removebg-preview.png'
import image15 from '../../component/Assets/icons/customer-support_2114809-removebg-preview.png'
import image16 from '../../component/Assets/icons/financial-advisor_4256762-removebg-preview.png'
import image17 from '../../component/Assets/icons/chef_1249857-removebg-preview.png'
import image18 from '../../component/Assets/icons/accountant_2607547-removebg-preview.png'

import imageService from '../../component/Assets/service.png'

import imageServicee from '../../component/Assets/service2.png'

import { Link,useNavigate } from 'react-router-dom';





const Service = () => {

const navigate=useNavigate()

  const servicesPart=(serviceName)=>{

navigate('/services' , {state:serviceName} )

  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const registerPage=()=>{
    navigate('/register')
  }

  return (
    <div className='servi'>


<div className="herosec11">

<div className="starthero11">
<h1>
Our Services
</h1>

<div className="startherobtnWork11">
   <img src={imageService} alt="" />
  </div>
</div>

      </div>


<div className="herosec22">

<div className="heroservi">
<h2>
Explore services
</h2>
<hr />
<div className="serviiceHero">

<div onClick={()=>servicesPart('privatenurse')} className="conservie">
<img src={image1} className='imgservie' alt="" />
<h4>Private Nurse </h4>
</div>
<div onClick={()=>servicesPart('adultcare')} className="conservie">
<img src={image2} className='imgservie' alt="" />
<h4>Adult Care  </h4>
</div>
<div onClick={()=>servicesPart('babysitter')} className="conservie">
<img src={image3} className='imgservie' alt="" />
<h4>Baby Sitter  </h4>
</div>
<div onClick={()=>servicesPart('housekeeper')} className="conservie">
<img src={image4} className='imgservie' alt="" />
<h4>House Keeper </h4>
</div>
<div onClick={()=>servicesPart('tutor')} className="conservie">
<img src={image5} className='imgservie' alt="" />
<h4>Tutor  </h4>
</div>
<div onClick={()=>servicesPart('cleaner')} className="conservie">
<img src={image6} className='imgservie' alt="" />
<h4>Cleaner</h4>
</div>
<div onClick={()=>servicesPart('waitress')} className="conservie">
<img src={image7} className='imgservie' alt="" />
<h4>Waitress   </h4>
</div>
<div onClick={()=>servicesPart('cooking')} className="conservie">
<img src={image8} className='imgservie' alt="" />
<h4>Cooking </h4>
</div>
<div onClick={()=>servicesPart('careforspecialneeds')} className="conservie">
<img src={image10} className='imgservie' alt="" />
<h4 style={{textAlign:'center'}}>Care for Special Needs </h4>
</div>
<div onClick={()=>servicesPart('maid')} className="conservie">
<img src={image11} className='imgservie' alt="" />
<h4>Maid  </h4>
</div>
<div onClick={()=>servicesPart('hairstylist')} className="conservie">
<img src={image14} className='imgservie' alt="" />
<h4>Hair Stylist </h4>
</div>
<div onClick={()=>servicesPart('receptionist')} className="conservie">
<img src={image15} className='imgservie' alt="" />
<h4>Receptionist  </h4>
</div>
<div onClick={()=>servicesPart('sales')} className="conservie">
<img src={image16} className='imgservie' alt="" />
<h4>Sales</h4>
</div>
<div onClick={()=>servicesPart('chef(ሼፍ)')} className="conservie">
<img src={image17} className='imgservie' alt="" />
<h4>Chef (ሼፍ)   </h4>
</div>
<div onClick={()=>servicesPart('accountant')} className="conservie">
<img src={image18} className='imgservie' alt="" />
<h4>Accountant </h4>
</div>
<div onClick={()=>servicesPart('secretary')} className="conservie">
<img src={image9} className='imgservie' alt="" />
<h4>Secretary </h4>
</div>

</div>


</div>



</div>


<div className="herosec66">

<div className="startheroo">
<h1>
Start Working With Our Company
</h1>

<div className="startherobtnWork">
    <button onClick={registerPage} className='startbtnhewe6 startbtnrewe6'>
    Register As Agent Now
    </button>
  </div>
</div>

      </div>

    </div>
  )
}

export default Service