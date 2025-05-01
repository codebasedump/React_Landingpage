import React from 'react'

const footer = (props) => {
  return (
    <div id="footer" className='container section navbar_footer'>
       <div className='row'>
            <div className='col-12'>
                {props.data ? props.data.footertitle : "Loading.."}
            </div>
        </div>
    </div>
  )
}

export default footer
