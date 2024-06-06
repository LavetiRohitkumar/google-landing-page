import React from 'react';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { GrDownload } from "react-icons/gr";


const Questions = () => {
  return (
    <div style={{ padding: '0 100px', width: '100vw' }}>
      <h1>Frequently asked questions</h1>
      <div style={{ display: "flex", justifyContent: "center", width: '100%' }}>
        <Accordion style={{ width: '100%' }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header><h2 style={{color:"rgb(25,103,210)",fontSize:"1.5rem",lineHeight:"2rem",letterSpacing:"-0.03125rem"}}>How do I make Chrome my default web browser?</h2></Accordion.Header>
            <Accordion.Body>
              <p style={{textAlign:"left"}} >You can set Chrome as your default browser on Windows or Mac operating systems as well as your<br /> iPhone, iPad or Android device. When you set Chrome as your default browser, any link you click <br /> will automatically open in Chrome. Find specific instructions for your device here.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><h2 style={{color:"rgb(25,103,210)",fontSize:"1.5rem",lineHeight:"2rem",letterSpacing:"-0.03125rem"}}>How can I customise Chrome?</h2></Accordion.Header>
            <Accordion.Body>
              <p style={{textAlign:"left"}} >You can test out different colours, themes and settings in real time by opening a new tab in Chrome <br /> and clicking the “Customise Chrome” icon in the bottom right corner. A new side panel will open <br /> with the available customisation features. Learn more about customising Chrome.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><h2 style={{color:"rgb(25,103,210)",fontSize:"1.5rem",lineHeight:"2rem",letterSpacing:"-0.03125rem"}}>What are Chrome's safety settings?</h2></Accordion.Header>
            <Accordion.Body>
              <p style={{textAlign:"left"}} >Chrome uses cutting-edge safety and security features to help you manage your safety. Use Safety <br /> Check to instantly audit for compromised passwords, safe browsing status and any available <br /> Chrome updates. Learn more about safety and security on Chrome.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header><h2 style={{color:"rgb(25,103,210)",fontSize:"1.5rem",lineHeight:"2rem",letterSpacing:"-0.03125rem"}}>What is Chrome’s password manager?</h2></Accordion.Header>
            <Accordion.Body>
              <p style={{textAlign:"left"}} >Chrome uses Google Password Manager, which makes it simple to save, manage and protect your <br /> passwords online. It also helps you create strong, unique passwords for every account you use. <br /> Learn more about Google Password Manager.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header><h2 style={{color:"rgb(25,103,210)",fontSize:"1.5rem",lineHeight:"2rem",letterSpacing:"-0.03125rem"}}>How do I add a browser extension to Chrome?</h2></Accordion.Header>
            <Accordion.Body>
              <p style={{textAlign:"left"}} >It’s easy to add extensions to Chrome for desktop. Simply visit the Chrome Web Store, find and select the extension you want, and <br /> click Add to Chrome. Some extensions might need additional <br /> permissions. To use the extension, click on its icon to the right of the address bar. Learn more about extensions.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header><h2 style={{color:"rgb(25,103,210)",fontSize:"1.5rem",lineHeight:"2rem",letterSpacing:"-0.03125rem"}}>How do I update Chrome?</h2></Accordion.Header>
            <Accordion.Body>
              <p style={{textAlign:"left"}} >Normally updates happen in the background when you close and reopen your computer's browser. <br /> If you haven’t closed your browser in a while, you might see a pending update. Learn more about <br /> Chrome updates.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="container" style={{ margin: '40px 0',borderRadius:"24px",height:"600px",width:"100%",backgroundColor:"rgb(26,115,232)",padding:"100px" }}>
        <h1 style={{color:"white",fontSize:"3.75rem",lineHeight:"4.5rem",letterSpacing:"-0.078125rem"}}>Take your browser <br /> with you</h1>
        <p style={{color:"white"}}>Download Chrome on your mobile device or tablet and sign into your <br /> account for the same browser experience, everywhere.</p>
        <Button variant='outline' style={{ borderRadius: '100px', backgroundColor: 'white', color: 'rgb(25,103,213)', fontWeight: '500', fontSize: '18px',height:"auto", padding:"20px",alignItems:"center",position:"relative", }}><GrDownload />Download Chrome</Button>
        <div className="container" style={{borderRadius:"16px 16px 0 0",padding:"10px",backgroundColor:"white",width:"200px",marginRight:"0",bottom:"0"}}>
                      <div className="imgContainer" style={{bottom:"0"}}>
                        <img src="https://www.google.com/chrome/static/images/campaigns/chrome-download/qr-code.webp" alt="" style={{bottom:"0",right:"100px"}} />
                        <p>Scan for the <br /> Chrome app</p>
                      </div>
        </div>
      </div>
    </div>
  )
}

export default Questions
