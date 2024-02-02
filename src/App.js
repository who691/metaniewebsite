
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './Pages/NavBar/NavBar';
import Footer from './Pages/Footer/Footer';
import Hero from './Pages/Hero/Hero';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Term from './Pages/Term/Term';
import Service from './Pages/Serve/Service';
import Employe from './Pages/Employe/Employe';
import Detail from './Pages/Detail/Detail';
import { UserContext } from './context/UserContext';
import LoginPhone from './Pages/Login/LoginPhone';
import Worker from './Pages/AvariableWorkers/Worker';
import Work from './Pages/AvariableWork/Work';
import Services from './Pages/Service/Services';
import WorkWekil from './Pages/WekilWork/WorkWekil';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<UserContext>
<NavBar/>

<Routes>
  <Route path='/' element={<Hero/>}/>
  <Route path='/serv' element={<Service/>} />

  <Route path='/employe' element={<Employe/>}/>
  <Route path='/detail' element={<Detail/>}/>
  <Route path='/register' element={<Register/>}/>
 {/* <Route path='/register' element={<Login/>}/> */} 
  <Route path='/login' element={<LoginPhone/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/term' element={<Term/>}/>
  <Route path='/worker' element={<Worker/>}/>
  <Route path='/work' element={<Work/>}/>
  <Route path='/workWekil' element={<WorkWekil/>}/>
  <Route path='/services' element={<Services/>}/>
  
</Routes>



<Footer/>
</UserContext>
</BrowserRouter>

      
    </div>
  );
}

export default App;
