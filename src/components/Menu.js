import React, { useState, useRef, useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const Menu = () => {
  const [radioValue, setRadioValue] = useState('All');
  const carouselRef = useRef(null);

  const radios = [
    // { name: 'All', value: 'All', component: 'all' },
    { name: 'Updates', value: '1', component: 'updates' },
    { name: 'Yours', value: '2', component: 'yours' },
    { name: 'Safe', value: '3', component: 'safe' },
    { name: 'Fast', value: '4', component: 'fast' },
    { name: 'By Google', value: '5', component: 'byGoogle' },
  ];

  const handleRadioChange = (value, component) => {
    setRadioValue(value);
    document.getElementById(component).scrollIntoView({ behavior: 'smooth' });
  };

  const images = [
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1.webp",
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2.webp",
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3.webp",
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4.webp",
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5.webp"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollPosition = window.pageYOffset;
        const mosaicItems = carouselRef.current.children;

        if (scrollPosition > 300) {
          mosaicItems[1].classList.remove('hidden');
          mosaicItems[4].classList.remove('hidden');
        } else {
          mosaicItems[1].classList.add('hidden');
          mosaicItems[4].classList.add('hidden');
        }

        carouselRef.current.style.transform = `translateX(-${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <p>Need the Chrome installer? Download here</p>
      <div style={{ position: 'fixed',  zIndex: '1000', background: '#fff', padding: '10px 20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', left: '50%', transform: 'translateX(-50%)', borderRadius:"30px" }}>
      <ButtonGroup style={{ margin: '0 auto', maxWidth: '800px',justifyContent:"center"}}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant='light'
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={() => handleRadioChange(radio.value, radio.component)}
            className="toggle-btn"
            style={{ border: 'none' , borderRadius:"20px" }}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>

      <ParallaxProvider>
        <div className="carousel-container"  style={{marginTop:"115px"}}>
          <Parallax y={[-20, 20]}>
            <div className="chr-mosaic">
              <div className="chr-mosaic_wrapper" ref={carouselRef}>
                {images.map((image, idx) => (
                  <div key={idx} className={`chr-mosaic_item ${idx === 1 || idx === 4 ? 'hidden' : ''}`}>
                    <div className="chr-mosaic__image-container">
                      <img src={image} alt={`Image ${idx + 1}`} className="carousel-image" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </>
  );
};

export default Menu;
