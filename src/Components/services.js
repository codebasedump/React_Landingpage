import React from 'react';
import { Thumnail } from './services_thumnail'
import 'bootstrap-icons/font/bootstrap-icons.css';

const services = (props) => {
  return (
    <div id="services" className="container section">
      <h2><b>Services</b></h2>
      <p>{props.data ? props.data.paragraph: "Loading.."}</p>
      <div className='row services_thumbnail'>
        <div className='col-md-12 p-5 bg-dark text-white rounded'>
          <div className='row'>
            <div className='col-md-8'>
              <h4>{ props.data ? props.data.title:"Loading.." }</h4>
              <p>{props.data ? props.data.paragraph: "Loading.."}</p>
              <p><button  type="button" className="btn btn-outline-info">View More</button></p>
            </div>
            <div className='col-md-4'>
              <img src={props.data ? props.data.bannerImage1: "Loading.." } className='service_image' alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <Thumnail {...props}/>
      </div>
    </div>
  )
}

export default services
