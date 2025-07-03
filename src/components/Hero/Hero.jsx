import React, { useState } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

import { images } from '../../assets/assets';
images;

const Hero = () => {
  const [activeBtn, setActiveBtn] = useState(false);
  const handleClickBtn = () => {
    setActiveBtn(prev => !prev);
  };
  return (
    <section className='hero'>
      <div className='hero-container'>
        <div className='hero-left'>
          <h2>Hello, i'm</h2>
          <h1>Stephen Otoni</h1>
          <p>
            {' '}
            FrontEnd Developer skilled in <span>HTML, CSS, JavaScript </span>
            and modern frameworks such as <span>REACT</span>. Crafting beautiful
            and user friendly web experience.
          </p>
          <button
            onClick={handleClickBtn}
            className={`btn S${activeBtn ? 'active' : ''}`}
          >
            <Link to='/Contact'>Contact Me</Link>
          </button>
        </div>
        <div className='hero-right'>
          <div className='glowing-circle'>
            <span></span>
            <span></span>
            <div className='hero-right-image'>
              <img src={images.pic} alt='my_pic' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
