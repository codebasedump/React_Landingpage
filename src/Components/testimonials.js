import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const testimonials = (props) => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  
  return (
    <div id="Testimonials" className="container section">
      <h2><b>Testimonials</b></h2>
      <p>{props.data ? props.data.paragraph: "Loading.."}</p>
      <div className='row services_thumbnail'>
        <div className='col-md-12'>
          <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
            <div className='row'>
              {props.data ? props.data.thumnails.map((item, index) =>(
                <SwiperSlide key={`${item} - ${index}`}>
                  <div className='col-md-3'>
                    <img src={item.img} alt={item.name} />
                  </div> 
                  <div className='col-md-9 Testimonial_content'> 
                      <p>{item.text}</p>
                      <p>{item.name}</p>
                  </div>
               </SwiperSlide>
              )) : "Loading.."}
            </div>
          </Swiper>
        </div>
      </div>
    </div> 
  )
}

export default testimonials
