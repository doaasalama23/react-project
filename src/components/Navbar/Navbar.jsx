import { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component
{
  state={
    name:"doaaaaa",
    age:30
  }
  render(){
    return(
     
      <nav className="navbar navbar-expand-lg navbar-light fixed-top top-0 start-0 end-0">
        <div className="container">
          <a className="navbar-brand text-white" href="#">Start React</a>
          <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item text-white">
                      <Link className="nav-link text-white" to='home'>Portfolio</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-white" to='about'>About</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-white" to='contact'>Contact</Link>
                  </li>
              </ul>
            </div>
          </div>
</nav>
    
    )

      
  }
}