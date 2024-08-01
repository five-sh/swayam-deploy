import React from 'react'
import './../../style/events/NextEvent.css'
function NextEvent({url, image}) {
  return (
    <>
        <div className='eventPoster'>
            <a href={url} target="_blank">
              <img src={image}></img>
            </a>
        </div>
    </>
  )
}

export default NextEvent