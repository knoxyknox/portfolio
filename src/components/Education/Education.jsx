import React from 'react'
import { educationList } from '../../assets/assets'

const Education = () => {
  return (
    <div className='resume-details education'>
      <h2 className="heading">My <span>Education</span></h2>
      
      <div className="resume-list">
        {educationList.map((card, index)=>(
          <div key={card.id} className="resume-item">
          <p className="year">{card.year}</p>
          <h3 className="course">{card.course}</h3>
          <p className="school company">{card.school}</p>
          <p className="degree">{card.degree}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Education
