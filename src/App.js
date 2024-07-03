import './App.css';
import NavScroll from './comp/nav bar/Nav';
import {  Route, Routes } from 'react-router-dom';
import HOme from './pages/HOme';
import Contact from './pages/Contact';
import ShCart from './pages/ShCart';
import Error from './pages/Error';
import Shirts from './pages/MensWear/Shirts';
import Shorts from './pages/MensWear/Shorts';
import Pants from './pages/MensWear/Pants';
import Dresses from './pages/WomensWear/Dresses';
import Tops from './pages/WomensWear/Tops';
import Skirts from './pages/WomensWear/Skirts';
import WPants from './pages/WomensWear/WPants';
import MensShortList from "./comp/test/test.js";

function App() {
  return (
    <div className="App">
      <NavScroll/>
      <Routes>
      <Route exact path="/Home" element={<HOme/>} />

                    {/* mens wear */}
        <Route path="/Shirts" element={<Shirts/>} />
        <Route path="/Shorts" element={<Shorts/>} />
        <Route path="/Pants" element={<Pants/>} />

                {/* womens wear */}
        <Route path="/Dresses" element={<Dresses/>} />
        <Route path="/Tops" element={<Tops/>} />
        <Route path="/Skirts" element={<Skirts/>} />
        <Route path="/WomensPants" element={<WPants/>} />
        
        
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/ShCart" element={<ShCart/>} />
        <Route path="/*" element={<Error />} />
        </Routes>
        <MensShortList/>

    </div>
  );
}

export default App;
