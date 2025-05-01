import { Image } from "./images"
import React from 'react'

const home = (props) => {
  return (
    <div id="home" className="section vertical_align">
    <div className="container">
      <div className="row">
        <div className="col-md-7 home_content">
            <div className="title_text">
                <h1>{ props.data ? props.data.title: "Loading" }</h1>
                <p>{ props.data ? props.data.paragraph: "Loading" }</p>
             </div>
        </div>
        <div className="col-md-5">
          <div className="home_image">
            { props.data ? props.data.bannerImg.map((d, i) =>(
                <div key={`${d.title}-${i}`}>
                  <Image
                    bannerImage1={d.bannerImage1}
                  />
                </div>
              )) : "Loading..." }
          </div>
        </div>
      </div>
    </div>
    </div> 
  )
}

export default home
