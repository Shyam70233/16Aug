import React from 'react'

const Team = () => {
  const a = [
    {image:"https://www.w3schools.com/w3images/team1.jpg" ,h2:"Demo1",h3:"frontend1",h4:"HTML",a:"#"},
    {image:"https://www.w3schools.com/w3images/team2.jpg" ,h2:"Demo2",h3:"frontend2",h4:"HTML CSS",a:"#"},
    {image:"https://www.w3schools.com/w3images/team3.jpg" ,h2:"Demo3",h3:"frontend3",h4:"HTML JAVSSCRIPT",a:"#"},
    {image:"https://www.w3schools.com/w3images/team4.jpg" ,h2:"Demo4",h3:"frontend4",h4:"HTML REACT",a:"#"},
    {image:"https://www.w3schools.com/w3images/team1.jpg" ,h2:"Demo5",h3:"frontend5",h4:"HTML JS",a:"#"},
  ]
  return (
    <div className='team'>
        <h1>Meet Our Team</h1>
        <p>We are provide industry expert</p>
        <div className='flex'>
          {a.map((x)=>(
            <div className='item'>
              <img src={x.image} />
              <h2>{x.h2}</h2>
              <h3>{x.h3}</h3>
              <h4>{x.h4}</h4>
              <a href={x.a} >Load More</a>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Team
