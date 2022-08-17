import React from 'react'

const Services = () => {
  var a = ["html","CSS","Javascript","Php",".net","Jquery","React","ReactJS","Mongoes"]
  return (
    <div className='services'>
        <h1>Our Services</h1>
          <p>We all IT solution provide</p>
          <div className='flex'>
          {a.map((x, index)=>(
            <div className='item'>
              <h3>services {index+1} </h3>
              <p>Some Desc About {x}</p>
              <code>Click for more details www.{x}.com</code>
              <button>Lear More</button>
            </div>
          ))}
          </div>
    </div>
  )
}

export default Services
