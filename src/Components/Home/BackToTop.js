import React, { useState, useEffect } from 'react';
import './BackToTop.css'; // Your CSS file

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
     <span style={{ fontWeight: 'bold' }}>&uarr;</span> {/* ↑ */}
    </button>
  );
}

export default BackToTop;
