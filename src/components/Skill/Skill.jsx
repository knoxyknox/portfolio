import React from 'react';
import { skillsList } from '../../assets/assets';
import './Skill.css';

const Skill = () => {
  return (
    <div className='resume-detail skills'>
      <h2 className='heading'>
        My <span>Skills</span>
        
      </h2>

      <div className='resume-list'>
        {skillsList.map((card, index) => (
          <div key={card.id}className='resume-item'>
            <i className={card.icon}></i>
            <span>{card.skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
