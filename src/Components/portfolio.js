import React from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const portfolio = (props) => {
  return (
    <div id="portfolio" className="container section">
      <h2><b>Portfolio</b></h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
      
      <div className='row'>
        {props.data ? props.data.map((item, index) => (
          <div className='col-md-6' key={`${item} - ${index}`}>
            <div class="card border_none mt-3 align-left">
              <img src={item.img} class="card-img-top" alt={item.title}/>
              <div class="card-body">
                <h5 class="card-title"><b>{item.title}</b></h5>
                <p class="card-text">{item.paragraph}</p>
              </div>
            </div>
          </div>
          )) : "Loading.."
        }
      </div>

    </div> 
  )
}

export default portfolio
