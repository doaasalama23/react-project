import { Component } from 'react';
import Home from '../Home/Home.jsx';
import Footer from '../Footer/Footer.jsx';
import Contact from '../Contact/Contact.jsx';
import About from '../About/About.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Notfound from '../Notfound/Notfound.jsx';
import Parent from '../Parent/Parent.jsx';
import { Route, Routes } from 'react-router-dom';
export default class App extends Component
{
  state={
    name:"doaaaaa",
    age:30
  }
  render(){
    return(
      <>
      <Navbar/>
        
          <Routes>
          <Route path='/' element={ <Home/>}>
            </Route>
            <Route path='home' element={ <Home />}>
            </Route>
            <Route path='about' element={ <About/>}>
            {/* <Route path='' element={<h1>projects//projects//projects</h1>}>
              </Route>
              <Route path='projects' element={<h1>projects//projects//projects</h1>}>
              </Route>
              <Route path='services' element={<h1>servicess//services//services</h1>}>
              </Route> */}
            </Route>
            <Route path='contact' element={ <Contact/>}>
            </Route>
            <Route path='*' element={<Notfound/>}>
            </Route>
          </Routes>  
     
      <Footer/>
      {/*
      <h2 class='bg-danger'>kheeeeeeeeeeer</h2>
      <i className='fas fa-home fa-5x'></i>
      <Home /> */}
      </>
    ) 
  }
}

