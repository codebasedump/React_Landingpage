import React from 'react'

export const Thumnail = (props) => {
  return (
    <>
      {
          props.data ? props.data.thumnails.map((item, index) => (
            <div className='col-md-3 services_thumbnail' key={`${index}`}>
              <p><i className={item.icon} /></p>
              <h4>{item.name}</h4>
              <p className='thumbnailser_text'>{item.text}</p>
          </div>
     )) : "Loading.."}
    </>
  )
}
