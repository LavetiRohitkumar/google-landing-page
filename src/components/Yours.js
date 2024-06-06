import React from 'react';
import { Button } from 'react-bootstrap';
import { MdFormatPaint } from "react-icons/md";
import { useState, useEffect, useRef } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


const Yours = () => {

    const carouselRef = useRef(null);

    const images = [
        "https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-1.webp",
        "https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-2.webp",
        "https://www.google.com/chrome/static/images/v2/yours-take-over/theme-arches.webp",
        "https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-1.webp",
        "https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-2.webp"
        
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
        <div>
            <h1 style={{fontSize:"3.75rem",lineheight:"4.5rem",letterSpacing:"-0.078125rem",fontWeight:"700"}}>Make it<span><button style={{borderRadius:"48px",overflow:"hidden",position:"relative",textAlign:"center",boxSizing:"border-box",fontSize:"3.75rem",lineheight:"4.5rem",letterSpacing:"-0.078125rem",backgroundColor:"rgb(252,232,230)",color:"rgb(234,67,53)",border:"none",fontWeight:"600",paddingLeft:"20px",paddingRight:"20px"}}><MdFormatPaint />yours</button></span>and take <br />   it with you</h1>
            {/* <div className="carouselImg">
                <img src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-arches.webp" alt="" />
                <img src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-1.webp" alt="" />
                <img src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-2.webp" alt="" />
            </div> */}

<ParallaxProvider>
        <div className="carousel-container">
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

            <div className="row" style={{ padding: "40px", display: 'flex', alignItems: 'center' }}>
                <div className="col" style={{ height: "624px", width: "624px", padding: "40px", margin: "30px", position: "relative" }}>
                    <img src="https://www.google.com/chrome/static/images/v2/accordion-timed/autofill-2x.webp" alt="" style={{ height: "500px", width: "500px", borderRadius: '30px' }} />
                </div>
                <div className="col" style={{ width: "624px", padding: "40px", margin: "30px", position: "relative" }}>
                    <div className="row" style={{ textAlign: "left" }}>
                        <h3>Customise your Chrome</h3>
                        <p>Personalise your web browser with themes, dark mode and other options built just for you.</p>
                        <span>explore themes</span>
                    </div>
                    <div className="row" style={{ textAlign: "left" }}>
                        <h3>Browse across devices</h3>
                        <p>Sign in to Chrome on any device to access your bookmarks, saved passwords and more.</p>
                    </div>
                    <div className="row" style={{ textAlign: "left" }}>
                        <h3>Customise your Chrome</h3>
                        <p>Use Chrome to save addresses, passwords and more to quickly autofill your details.</p>
                    </div>
                    <Button variant='light' style={{ textAlign: "buttom", borderRadius: '100px', color: 'darkblue', fontWeight: '600', backgroundColor: '#D2E3FC' }}>Sign in to get started</Button>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 200px', maxWidth: '100vw' }}>
                <div style={{ width: "500px", textAlign: "left" }}>
                    <h2 style={{fontSize:"2.5em",lineHeight:"2rem",letterSpacing:"-0.03125rem",fontWeight:"600"}}>Extend your <br /> experience</h2>
                    <p>From shopping and entertainment to <br /> productivity, find extensions to improve your <br /> experience in the Chrome Web Store.</p>
                    <Button variant='light' style={{ textAlign: "buttom", borderRadius: '100px', color: 'darkblue', fontWeight: '600', backgroundColor: '#D2E3FC' }}>Explore extensions</Button>
                </div>
                <div style={{ width: "600px", }}>
                    <img src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-ui-2.webp" alt="img" style={{ height: "600px", width: "800px" }} />
                </div>
            </div >
        </div >
    )
}

export default Yours;
