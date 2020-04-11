import React from 'react';
import FacebookImage from '../../assets/facebook.png';
import InstagramImage from '../../assets/instagram.png';

const SideBar = () => {
  return(
    <div id='sidebar-screen'>
      <div id='link-list'>
        <a className='link' href="https://www.facebook.com/cyndi.bird" target="_blank"><img className="icon" src={FacebookImage}/></a>
        <a className='link' href="https://www.instagram.com/sixftaprt" target="_blank"><img className="icon" src={InstagramImage}/></a>
      </div>
    </div>
  );
}

export default SideBar;