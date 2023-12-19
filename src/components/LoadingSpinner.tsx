import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className='loader-holder'>
<div className="loader">
  <span className="l">L</span>
  <span className="o">o</span>
  <span className="a">a</span>
  <span className="d">d</span>
  <span className="i">i</span>
  <span className="n">n</span>
  <span className="g">g</span>
  <span className="d1">.</span>
  <span className="d2">.</span>
</div>
</div>
  );
};

export default LoadingSpinner;