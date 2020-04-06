import React, { useEffect, useState } from 'react';
import '../sass/center.scss';

const Center = () => {
  useEffect(() => {
    document.getElementById('sfa-text-hidden').classList.add('after');
  }, []);

  const [state, setState] = useState({transform: 'translateX(0px) translateY(0px)'});

  window.onmousemove = (e) => {
    setState({transform: `translateX(${(e.clientX-window.innerWidth/2)/100}px) translateY(${(e.clientY-window.innerHeight/2)/100}px)`});
  }

  return(
    <div id='center-screen'>
      <div id='text-container'>
        <h1 id='sfa-text'>Six Feet Apart</h1>
        <h1 id='sfa-text-hidden' className='no-after' style={state}>Six Feet Apart</h1>
        <p>Mobilizing resources to<br/>fight COVID-19</p>
      </div>
    </div>
  );
}

export default Center;