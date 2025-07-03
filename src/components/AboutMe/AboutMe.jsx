import './AboutMe.css'
import { aboutMeList } from '../../assets/assets'

const AboutMe = () => {
  return (
    <div className='resume-detail about'>
       <h2 className="heading">About <span>Me</span></h2>
       
       <div className="resume-list">
        {aboutMeList.map(item=>(
          <div key= {item.id}className="resume-item">
            <p>{item.name}<span>{item.span}</span></p>
          </div>
        ))}
       </div>
    </div>
  )
}

export default AboutMe
