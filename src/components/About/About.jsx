import { Component } from 'react';
import { Link , Outlet } from 'react-router-dom';
import style from './About.module.css';
export default class About extends Component
{
  state={
    name:"doaaaaa",
    age:30,
    count:0
  }
  changeCount=()=>{
    let myCount=this.state.count;
    myCount=1445;
    this.setState({count:myCount})
  }
  changeName=()=>{
    let myName=this.state.name;
    myName='mariem';
    this.setState({name:myName})
  }
  render(){
    return (
      <>
      <section className='text-center about-sec py-5'>
        <h2 className='text-white'>ABOUT</h2>
        <div className="divider-custom text-white">
                    <div className="divider-custom-line bg-white"></div>
                    <div className="divider-custom-icon text-white"><svg className="svg-inline--fa fa-star fa-w-18 text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></div>
                    <div className="divider-custom-line bg-white"></div>
        </div>
        <div className='containar about-container'>
          <div className='row justify-content-center'>
            <div className='col-md-7'>
            <div className='row'>
            <div className='col-md-6'>
              <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className='col-md-6'>
              <p className='text-white'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
            </div>
              </div>
          </div>
        </div>
      </section>
      {/* <h1 className={`bg-danger ${style.test}`}>doaa salama</h1>
      <div className='row'>
      <div className='col-md-3'>
        <nav>
          <ul>
            <li>
              <Link to='projects'>projects</Link>
            </li>
            <li>
              <Link to='services'>services</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='col-md-9'>
        <Outlet/>
      </div>
      </div> */}
      {/* <h1 className='bg-warning text-center'>Remember copy and paste لادين له</h1> */}
        {/* <h2>name:{this.state.name}</h2>
        <h2>count:{this.state.count}</h2>
         <h2 className={style.test}>الله</h2>
         <button onClick={this.changeCount} className='btn btn-primary mx-3'>click me</button>
         <button onClick={this.changeName} className='btn btn-warning'>click me</button> */}
      </>
    )
    
  }
}