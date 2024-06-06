import React from 'react';
import { BsTools } from "react-icons/bs";

const ByGoogle = () => {
  return (
    <div style={{ margin: '40px 0', padding: '0 130px' }}>
       <h1 style={{fontSize:"3.75rem",lineheight:"4.5rem",letterSpacing:"-0.078125rem",fontWeight:"700"}}>The browser <span><button style={{borderRadius:"48px",overflow:"hidden",position:"relative",textAlign:"center",boxSizing:"border-box",fontSize:"3.75rem",lineheight:"4.5rem",letterSpacing:"-0.078125rem",backgroundColor:"rgb(254,247,224)",color:"rgb(213,111,13)",border:"none",fontWeight:"600",paddingLeft:"20px",paddingRight:"20px"}}><BsTools />built</button></span> <br /> by google</h1>
      <div className="container" style={{ borderRadius: '30px', backgroundColor: "#FEF7E0", height: "600px", width: "100%", padding: "60px", marginTop: '40px' }}>
        <h5 style={{ textAlign: "left", fontSize: '10x' }}>GOOGLE AI</h5>
        <div className="row" style={{ textAlign: "left" }}>
          <div className="col-4">
            <h2>Access AI superpowers while you browse.</h2>
          </div>
          <div className="col-8">
            <p>Google is integrating artificial intelligence to make our products more useful. We use AI for features like Search, Google Translate, and more, and we’re innovating new technologies responsibly.</p>
            <h5>Explore Google AI</h5>
          </div>
        </div>
        <img src="https://www.google.com/chrome/static/images/v2/gallery/ai_desktop.webp" alt="" />
      </div>
      <div className="container" >
        <div className="row" style={{ marginTop: '40px', gap: '50px' }}>
          <div className="col" style={{ backgroundColor: "#fde293", textAlign: "left", padding: "60px", borderRadius: '30px', width: '432px', overflow: 'hidden' }}>
            <h5>GOOGLE SEARCH</h5>
            <h2>The search bar you love, built right in.</h2>
            <img src="https://www.google.com/chrome/static/images/v2/gallery/search-front_desktop.webp" alt="" />
            {/* <img src="https://www.google.com/chrome/static/images/v2/gallery/search-back.webp" alt="" /> */}
            {/* <p>Access a world of knowledge at your fingertips. Check the weather, solve math equations, and get instant search results, all contained inside your browser’s address bar.</p> */}
          </div>
          <div className="col" style={{ border: '1px solid gray', padding: '60px', borderRadius: '30px', width: '432px' }}>
            <h5>GOOGLE WORKSPACE</h5>
            <h2>Get things done, with or without Wi-Fi.</h2>
            <div className="imgcontainee" style={{justifyContent:"center"}}>
              <img src="https://www.google.com/chrome/static/images/v2/gallery/workspace-1.webp" alt="" />
            </div>
            {/* <img src="https://www.google.com/chrome/static/images/v2/gallery/offline.webp" alt="" /> */}
            {/* <p>Get things done in Gmail, Google Docs, Google Slides, Google Sheets, Google Translate and Google Drive, even without an Internet connection.</p> */}
            <h5>Learn how to work offline</h5>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ByGoogle
