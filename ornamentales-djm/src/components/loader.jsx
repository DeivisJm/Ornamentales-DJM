import React from 'react';
import '../styles/loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="plant">
        <div className="stem"></div>
        <div className="leaf leaf-left"></div>
        <div className="leaf leaf-right"></div>
      </div>
    </div>
  );
};

export default Loader;
