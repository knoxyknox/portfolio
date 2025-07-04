import './Projects.css';
import { portfolioList } from '../../assets/assets';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % portfolioList.length;

    setCurrentIndex(newIndex);
  };
  const handlePrev = () => {
    const newIndex =
      (currentIndex - 1 + portfolioList.length) % portfolioList.length;

    setCurrentIndex(newIndex);
  };
  const handleIndicatorClick = index => {
    setCurrentIndex(index);
  };

  return (
    <section className='portfolio'>
      <h2 className='heading'>
        Latest <span>Project</span>
      </h2>

      <div className='portfolio-container carousel'>
        <div className='carousel-control next' onClick={handleNext}>
          <i className='bx bx-chevron-right'></i>
        </div>

        <div className='portfolio-box carousel-items'>
          {portfolioList.map((list, index) => (
            <div
              key={list.id}
              className={`portfolio-detail carousel-item ${
                index === currentIndex ? 'active' : ''
              }`}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
              }}
            >
              <h3>{list.name}</h3>
              <div className='portfolio-box box-grid'>
                <div className='portfolio-desc'>
                  <p className='type'>{list.type}</p>
                  <p className='desc'>{list.desc}</p>
                  <div className='tech'>
                    <p>{list.tech}</p>
                  </div>
                  <div className='live-github'>
                    <a href={list.live_url}>
                      <i className={list.icon_arrow}></i>
                      <span>{list.live}</span>
                    </a>
                    <a href={list.git_url}>
                      <i className={list.icon_git}></i>
                      <span> {list.git}</span>
                    </a>
                  </div>
                </div>
                <div className='image'>
                  <img src={list.port_img} alt='' />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='carousel-control prev' onClick={handlePrev}>
          <i className='bx bx-chevron-left'></i>
        </div>
        <div className='carousel-indicators'>
          {portfolioList.map((list, index) => (
            <button
              key={list.id}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
