
import './Experience.css';
import { experienceList } from '../../assets/assets';

const Experience = () => {
  return (
    <div className='resume-details experience'>
      <h2 className='heading'>
        My <span>Experience</span>
      </h2>
      

      <div className='resume-list'>
        {experienceList.map((card, index) => (
          <div key={card.id} className='resume-item'>
            <p className='year'>{card.year}</p>
            <h3 className='exp-position'>{card.position}</h3>
            <p className='company'>
              {card.company} <span>{card.location}</span>
            </p>
            <p className='role'>{card.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
