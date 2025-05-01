import React from 'react'

const about = (props) => {
  return (
    <div id="about" className="container section">
      <div className='row'>
          <div className='col-md-4'>
            <div className='title'>
              <h2><b>About Us</b></h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='row'>
              { 
                props.data ? props.data.map((item, index) => (
                  <div className='col-md-6 section_thumb' key={`${item} - ${index}`}>
                    <h4>{item.title}</h4>
                    <p>{item.paragraph}</p>
                  </div>
                )): "Loading.."
              }
            </div>
          </div>
      </div>
    </div> 
  )
}

export default about
