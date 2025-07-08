import './Projects.css';
import { portfolioList } from '../../assets/assets';
import { useCallback, useEffect, useState } from 'react';

const Projects = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % portfolioList.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + portfolioList.length) % portfolioList.length
    );
  }, []);

  const handleIndicatorClick = useCallback(index => {
    setCurrentIndex(index);
  }, []);

  const handlePause = useCallback(() => {
    setIsPaused(true);
  }, []);
  const handleResume = useCallback(() => {
    setIsPaused(false);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex(prevIndex => (prevIndex + 1) % portfolioList.length);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [isPaused, interval]);

   useEffect(() => {
    const preloadId = Math.random().toString(36).substring(2, 8);
    let isMounted = true;
    const uniqueImages = [...new Set(portfolioList.map(list => list.port_img))];
    const preloadImages = uniqueImages.map(image => {
      const img = new Image();
      img.src = image;
      img.onerror = () =>
        isMounted && console.error(`[${preloadId}] Failed to preload: ${image}`);
      return img;
    });
    return () => {
      isMounted = false;
      preloadImages.forEach(img => (img.src = ''));
    };
  }, []);

  return (
    <section className='portfolio'>
      <h2 className='heading'>
        Latest <span>Project</span>
      </h2>

      <div
        onMouseOver={handlePause}
        onMouseOut={handleResume}
        onTouchStart={handlePause}
        onTouchEnd={handleResume}
        onFocus={handlePause}
        onBlur={handleResume}
        aria-label='Portfolio carousel'
        className='portfolio-container carousel'
      >
        <div
          className='carousel-control next'
          onClick={handleNext}
          aria-label='Next project'
        >
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
              aria-hidden={index != currentIndex}
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
                    <a
                      href={list.live_url}
                      aria-label={`view live demo of ${list.name}`}
                    >
                      <i className={list.icon_arrow}></i>
                      <span>{list.live}</span>
                    </a>
                    <a
                      href={list.git_url}
                      aria-label={`view github repo of ${list.name}`}
                    >
                      <i className={list.icon_git}></i>
                      <span> {list.git}</span>
                    </a>
                  </div>
                </div>
                <div className='image'>
                  <img src={list.port_img} alt={`${list.name} screenshot`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className='carousel-control prev'
          onClick={handlePrev}
          aria-label='Previous project'
        >
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
