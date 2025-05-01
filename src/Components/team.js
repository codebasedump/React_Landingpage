import React from 'react'

const team = (props) => {
  return (
    <div id="team" className="container section">
      <h2><b>Teams</b></h2>
      <p>{props.data ? props.data.paragraph: "Loading.."}</p>
      <div className='row services_thumbnail'>
        <div className='col-md-12'>
            <div className='team_details'>
              <div className='row'> 
                { props.data 
                    ? props.data.thumnails.map((item, index) =>(
                      <div className='col-md-3 teamdetail' key={`${item} - ${index}`}>
                          <img src={item.img} alt=""/>
                          <p>{item.name}</p>
                          <p><b>{item.job}</b></p>
                          <p>{item.text}</p>
                      </div>
                    )) : "Loading..."
                }
              </div>
            </div>
        </div>
      </div>
  </div> 
  )
}

export default team
