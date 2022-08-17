import React from 'react'

const Price = () => {
  const a = [
    {name:"Basic",price:500, a:["f1","f2","f3","f4","f5"] },
    {name:"Pro",price:1000, a:["f1","f2","f3","f4","f5"] },
    {name:"Premium",price:1500, a:["f1","f2","f3","f4","f5"] },
  ]
  return (
    <div className='pricing'>
        <h1>Our Pricing</h1>
        <p>We are provide best price</p>
        <div className='flex'>
          {a.map((x,index)=>(
            <div className='item'>
              <div className='header'>
                <h1>{x.name}</h1>
              </div>
              <div className='body'>
                {x.a.map(y=><li>{y}</li>)}
                <big>{x.price}</big>
              </div>
              <div className='footer'>
                <button>View Plane</button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Price
