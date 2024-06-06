import React from 'react';
import { TbShieldLockFilled } from "react-icons/tb";


const Safe = () => {
  return (
    <div style={{ padding: '20px 130px' }}>
      <h1 style={{fontSize:"3.75rem",lineheight:"4.5rem",letterSpacing:"-0.078125rem",fontWeight:"700"}}>Stay<span><button style={{borderRadius:"48px",overflow:"hidden",position:"relative",textAlign:"center",boxSizing:"border-box",fontSize:"3.75rem",lineheight:"4.5rem",letterSpacing:"-0.078125rem",backgroundColor:"rgb(232,240,254)",color:"rgb(25,103,210)",border:"none",fontWeight:"600",paddingLeft:"20px",paddingRight:"20px"}}><TbShieldLockFilled />safe</button></span> <br /> while you browse</h1>
      <div style={{ display: 'flex', gap: '80px', alignItems: 'start', justifyContent: 'space-between' }}>
        <div className="col" style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div className="col" style={{ padding: '60px', backgroundColor: "#1A73E8", maxHeight: "640px", maxWidth: "620px", textAlign: "left", borderRadius: '30px' }}>
            <h4 style={{ fontSize: '14px', color: 'white' }}>PASSWORD MANAGER</h4>
            <h2 style={{ fontSize: '34px', color: 'white', fontWeight: '700' }}>Use strong passwords on every site.</h2>
            <img src="https://www.google.com/chrome/static/images/v2/gallery/passwords-fill-2.webp" alt="img" />
          </div>
          <div className="col" style={{ padding: '60px', border: '1px solid gray', minHeight: "560px", width: "600px", textAlign: "left", borderRadius: '30px' }}>
            <h4 style={{ fontSize: '14px', color: '#5F6368' }}>ENHANCED SAFE BROWSING</h4>
            <h2 style={{ fontSize: '50px', fontWeight: '650' }}>Browse with the confidence that you're staying safer online.</h2>
          </div>
        </div>
        <div className="col" style={{ marginTop: '60px', display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '30px' }}>
          <div className="col" style={{ padding: '60px', backgroundColor: "#E8F0FE", minHeight: "560px", width: "600px", textAlign: "left", borderRadius: '30px' }}>
            <h4 style={{ fontSize: '14px', color: '#5F6368' }}>SAFETY CHECK</h4>
            <h2 style={{ fontSize: '50px', fontWeight: '650' }}>Check your safety level in real time with just one click.</h2>
          </div>
          <div className="col" style={{ padding: '60px', backgroundColor: "#174EA6", maxHeight: "640px", maxWidth: "620px", textAlign: "left", borderRadius: '30px', overflow: 'hidden' }}>
            <h4 style={{ fontSize: '14px', color: 'white' }}>PRIVACY GUIDE</h4>
            <h2 style={{ fontSize: '34px', color: 'white' }}>Keep your privacy under your control with easy-to-use settings.</h2>
            <img src="https://www.google.com/chrome/static/images/v2/gallery/google-safety.webp" alt="" />
            {/* <p>Chrome makes it easy to understand exactly what you’re sharing online and who you’re sharing it with. Simply use the Privacy Guide, a step-by-step tour of your privacy settings.</p>
            <h5>Learn more about intuitive safety controls</h5> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Safe
