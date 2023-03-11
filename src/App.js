import './App.css';
import Navbar from './components/Navbar';
import Footer from './Footer';
import Home from './Home';
import DeeoTech from './components/NavbarComponents/deeoTech'
import Aboutus from './components/NavbarComponents/Aboutus'
import Blog from './components/NavbarComponents/Blog';
import Agriculture from './components/NavbarComponents/Agriculture'

import BLTTservices from './components/NavbarComponents/BLTTservices'
import Careers from './components/NavbarComponents/Careers'
import Contactus from'./components/NavbarComponents/Contactus'
import ConvAi from './components/NavbarComponents/ConvAi'
import Customer from './components/NavbarComponents/Customer'
import EDPml from './components/NavbarComponents/EDPml'
import Healthcare from'./components/NavbarComponents/Healthcare'
import Publication from './components/NavbarComponents/Publication'
import Researchteam from './components/NavbarComponents/Researchteam'
import Retail from './components/NavbarComponents/Retail'
import SecurityprivacyAi from './components/NavbarComponents/SecurityprivacyAi'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Navbar/>  
      <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/deepTech' element={<DeeoTech/>} ></Route>
      <Route path='/aboutus' element={<Aboutus/>} ></Route>
      <Route path='/blog' element={<Blog/>} ></Route>
      <Route path='/agriculture' element={<Agriculture/>} ></Route>
      <Route path='/bLTTservices' element={<BLTTservices/>} ></Route>
      <Route path='/Careers' element={<Careers/>} ></Route>
      <Route path='/Contactus' element={<Contactus/>} ></Route>
      <Route path='/eDPml' element={<EDPml/>} ></Route>
      <Route path='/healthcare' element={<Healthcare/>} ></Route>
      <Route path='/publication' element={<Publication/>} ></Route>
      <Route path='/researchteam' element={<Researchteam/>} ></Route>
      <Route path='/retail' element={<Retail/>} ></Route>
      <Route path='/securityprivacyAi' element={<SecurityprivacyAi/>} ></Route>
      <Route path='/convAi' element={<ConvAi/>} ></Route>
      <Route path='/customer' element={<Customer/>} ></Route>

      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
