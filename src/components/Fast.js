import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BiTachometer } from "react-icons/bi";
import { MdOutlineSpeed } from "react-icons/md";


const Fast = () => {
  return (
    <div style={{ margin: '40px 0', padding: '0 130px' }}>
            <h1 style={{fontSize:"3.75rem",lineheight:"4.5rem",letterSpacing:"-0.078125rem",fontWeight:"700"}}>The<span><button style={{borderRadius:"48px",overflow:"hidden",position:"relative",textAlign:"center",boxSizing:"border-box",fontSize:"3.75rem",lineheight:"4.5rem",letterSpacing:"-0.078125rem",backgroundColor:"rgb(206,234,214)",color:"rgb(24,128,56)",border:"none",fontWeight:"600",paddingLeft:"20px",paddingRight:"20px"}}><MdOutlineSpeed />fast</button></span>way to do <br /> things online</h1>
      <Carousel data-bs-theme="dark" style={{ marginTop: '40px', padding: '30px' }}>
        <Carousel.Item>
          <div className="container" style={{ height: "480px", minWidth: "953px", position: "relative" }}>
            <video
              className="d-block w-100"
              style={{ height: "100%", width: "100%", borderRadius: '30px', objectFit: 'cover' }}
              controls
            >
              <source src="/assets/video.webm" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Carousel.Caption style={{ position: 'absolute', top: '0', left: '0', right: '0', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
              <div className="row">
                <div className="col-4">
                  <h2 style={{ color: 'white',textAlign:"left" }}>Prioritise <br /> performance</h2>
                </div>
                <div className="col-8">
                  <div className="row">
                    <p style={{ color: 'white',textAlign:"left" }}>Chrome is built for performance. Optimise your experience with features like Energy Saver and Memory Saver.</p>
                  </div>
                  <div className="row">
                    <p style={{ color: 'white',textAlign:"left" }}>Learn more about Memory and Energy Saver</p>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container" style={{ height: "480px", minWidth: "953px", position: "relative" ,backgroundColor:"rgb(253,226,147)",textAlign:"left"}}>
            <Carousel.Caption style={{ position: 'absolute', top: '0', left: '0', right: '0', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
              <div className="row">
                <div className="col-4">
                  <h2 style={{ color: 'white',textAlign:"left" }}>Stay on top <br /> of tabs</h2>
                </div>
                <div className="col-8">
                  <div className="row">
                    <p style={{ color: 'white',textAlign:"left" }}>Chrome has tools to help you manage the tabs you’re not quite <br /> ready to close. Group, label, and colour-code your tabs to stay <br /> organised and work faster.</p>
                  </div>
                </div>
                <div className="row">
                  <img src="https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_desktop.webp" alt="" />
                </div>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container" style={{ height: "480px", minWidth: "953px", position: "relative" ,backgroundColor:"rgb(24,128,56)",textAlign:"left"}}>
            <Carousel.Caption style={{ position: 'absolute', top: '0', left: '0', right: '0', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
              <div className="row">
                <div className="col-4">
                  <div className="row">
                  <h2 style={{ color: 'white',textAlign:"left" }}>Optimised for<br /> your device</h2>
                  </div>
                  <div className="row">
                    <p style={{ color: 'white',textAlign:"left" }}>Chrome is built to work with your <br /> device across platforms. That means <br /> a smooth experience on whatever <br /> you’re working with.</p>
                  </div>
                  <div className="row">
                    <div className="container" style={{borderRadius:"16px 16px 0 0",padding:"10px",backgroundColor:"white"}}>
                      <div className="imgContainer" style={{bottom:"0"}}>
                        <img src="https://www.google.com/chrome/static/images/campaigns/chrome-download/qr-code.webp" alt="" />
                        <p>Scan for the <br /> Chrome app</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <img src="https://www.google.com/chrome/static/images/homepage/fast/devices_desktop.webp" alt="" />
                </div>
                {/* <div className="row">
                  <img src="https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_desktop.webp" alt="" />
                </div> */}
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default Fast;
