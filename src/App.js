import './App.css';
import Navbar from './components/Navbar';
import Footer from './Footer';
import Home from './Home';
import DeeoTech from './components/NavbarComponents/deeoTech'
import Aboutus from './components/NavbarComponents/Aboutus'
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
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
