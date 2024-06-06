import React, { useState } from 'react';
import './App.css';
import Navbarr from './components/Navbarr';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Updates from './components/Updates';
import Yours from './components/Yours';
import Safe from './components/Safe';
import Fast from './components/Fast';
import ByGoogle from './components/ByGoogle';
import Questions from './components/Questions';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [visibleComponent, setVisibleComponent] = useState('Updates');

  let lastScrollTop = 0;

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div className="App" style={{ margin: "0", padding: "0" }}>
      <Navbarr isVisible={isVisible} />
      <Banner />
      <Menu setVisibleComponent={setVisibleComponent} />
      <div id="updates" style={{ marginTop: '50px' }}><Updates /></div>
      <div id="yours" style={{ marginTop: '50px' }}><Yours /></div>
      <div id="safe" style={{ marginTop: '50px' }}><Safe /></div>
      <div id="fast" style={{ marginTop: '50px' }}><Fast /></div>
      <div id="byGoogle" style={{ marginTop: '50px' }}><ByGoogle /></div>
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
