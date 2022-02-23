import { Component } from 'react';
import notimage from '../../images/avataaars.svg';
import style1 from '../../images/cabin.png';
import style2 from '../../images/cake.png';
import style3 from '../../images/game.png';
import style6 from '../../images/circus.png';
import style5 from '../../images/safe.png';
import style4 from '../../images/submarine.png';
export default class Home extends Component
{
  state={
    name:"doaaaaa",
    age:30
  }
  welcome(){
    alert("hi doaaaaaaaaaaa");
  }
  render(){
    return(
      <>
      <section className='text-center avatar-sec py-5'>
        <img className='w-25' src={notimage} alt='fff'></img>
        <h1 className='text-white my-4'>START REACT</h1>
        <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></div>
                    <div className="divider-custom-line"></div>
        </div>
      </section>
      <section className='portfolio text-center py-5'>
        <div className='container'>
        <h2 className='mt-5 mb-3 port'>PORTFOLIO</h2>
        <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></div>
                    <div className="divider-custom-line"></div>
        </div>
          <div className='row'>
            <div className='col-md-4'>
              <img className='w-100 my-3 nn' src={style1} alt="rr"></img>
            </div>
            <div className='col-md-4'>
              <img className='w-100 my-3 nn' src={style2} alt="rr"></img>
            </div>
            <div className='col-md-4'>
              <img className='w-100 my-3 nn' src={style3} alt="rr"></img>
            </div>
            <div className='col-md-4'>
              <img className='w-100 my-3 nn' src={style4} alt="rr"></img>
            </div>
            <div className='col-md-4'>
              <img className='w-100 my-3 nn' src={style5} alt="rr"></img>
            </div>
            <div className='col-md-4'>
              <img className='w-100 my-3 nn' src={style6} alt="rr"></img>
            </div>
          </div>
        </div>
      </section>
     {/* <h2 className='bg-dark text-white text-center'>ان شاء الله هبقى حد مهم جدا فى الرياكت</h2> */}
     {/* <h1>{this.state.name}</h1>
     <button onClick={this.welcome} className='btn btn-info'>click me</button> */}
     </>
     )
  }
}