import React, { useEffect, useState } from 'react';
import './Resume.css';
import { menuList } from '../../assets/assets';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Skill from '../Skill/Skill';
import AboutMe from '../AboutMe/AboutMe';
import { useLocation, useNavigate } from 'react-router-dom';

const Resume = () => {
  const [currenCategory, setCurrentCategory] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeList, setActiveList] = useState('Experience');
  const handleClick = category => {
    setActiveList(category);
    navigate(`?category=${category}`);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    setCurrentCategory(category);
  }, [location.search]);
  useEffect(() => {
    if (currenCategory) {
      setActiveList(currenCategory);
    }
  },[currenCategory]);

  return (
    <section className='resume'>
      <div className='resume-container'>
        <div className='resume-box'>
          <h2>Why Hire Me?</h2>

          {menuList.map(item => (
            <button
              key={item.list}
              onClick={() => handleClick(item.list)}
              className={`resume-btn ${
                activeList === item.list ? 'active' : ''
              }`}
            >
              {item.list}
            </button>
          ))}
        </div>
        <div className='resume-box'>
          {activeList === 'Experience' && <Experience />}
          {activeList === 'Education' && <Education />}
          {activeList === 'Skill' && <Skill />}
          {activeList === 'About Me' && <AboutMe />}
        </div>
      </div>
    </section>
  );
};

export default Resume;
