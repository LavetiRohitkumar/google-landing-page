import React from 'react'
// import icon1 from '/assets/icon.png';

const Banner = () => {
  return (
    <div style={{ marginTop: '30px' }}>
      <div className="logo">
        <img src="/favicon.png" alt="icon" style={{ height: "70px", width: "70px" }} />
        <h1 style={{ fontWeight: "750", fontSize: '70px' }}>The browser <br /> built to be yours</h1>
      </div>
    </div>
  )
}

export default Banner
