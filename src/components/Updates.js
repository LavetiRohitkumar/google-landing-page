import React from 'react';
// import icon from '../assets/icon.png';
import { PiClockClockwiseFill } from "react-icons/pi";

const Updates = () => {
  return (
    <div style={{margin:"120px"}}>
      <h1 style={{fontSize:"3.75rem",lineheight:"4.5rem",letterSpacing:"-0.078125rem",fontWeight:"700"}}>Discover the latest <br /> <span><button style={{borderRadius:"48px",overflow:"hidden",position:"relative",textAlign:"center",boxSizing:"border-box",fontSize:"3.75rem",lineheight:"4.5rem",letterSpacing:"-0.078125rem",backgroundColor:"rgb(232,240,254)",color:"rgb(25,103,210)",border:"none",fontWeight:"600",paddingLeft:"20px",paddingRight:"20px"}}><PiClockClockwiseFill />updates</button></span>  from Chrome</h1>
      <div className="row" style={{marginTop:"90px"}}>
        <div className="col">
            <div className="container" style={{height:"640px", width:"600px",backgroundColor:"#e8f0fe", borderRadius:"20px", position:"relative"}}>
              <div className="textArea" style={{marginLeft:"20px", textAlign:"left", padding:"40px"}}>
                <h6>UPDATES</h6>
                <h1 style={{fontSize:"48px",letterSpacing:"-1px",lineHeight:"56px",fontWeight:"500"}}>Automatic updates</h1>
                <p>There’s a new Chrome release every four weeks, making it easy to have the newest features and a faster, safer web browser.</p>
                <p style={{color:"blue"}}>Learn about automatic updates</p>
              </div>
              <img src="https://www.google.com/chrome/static/images/engagement-homepage/updates/updates-2x.png" alt="img" style={{height:"50%",width:"100%",position:"absolute",left:"0",bottom:"0"}}/>
            </div>
        </div>
        <div className="col">
            <div className="container" style={{height:"640px", width:"600px",backgroundColor:"#fef7e0", borderRadius:"20px",position:"relative"}}>
              <div className="textArea" style={{marginLeft:"20px", textAlign:"left", padding:"40px"}}>
                <h6>LATEST</h6>
                <h1 style={{fontSize:"48px",letterSpacing:"-1px",lineHeight:"56px",fontWeight:"500"}}>New from Chrome</h1>
                <p>Learn what’s new on Chrome</p>
                <p style={{color:"blue"}}>Learn about automatic updates</p>
              </div>
              <img src="/assets/icon.png" alt="icon" style={{position:"absolute",right:"0",bottom:"0"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Updates;
