import React from 'react';
import FacebookImage from '../../assets/facebook.png';
import InstagramImage from '../../assets/instagram.png';

const SideBar = () => {
  return(
    <div id='sidebar-screen'>
      <div id='link-list'>
        <a className='link' href="https://www.facebook.com/cyndi.bird" target="_blank" rel="noopener noreferrer"><img className="icon" src={FacebookImage} alt=""/></a>
        <a className='link' href="https://www.instagram.com/sixftaprt" target="_blank" rel="noopener noreferrer"><img className="icon" src={InstagramImage} alt=""/></a>
        <a className='link' href="/prayer"><i className='material-icons'>phone_in_talk</i>Prayer Line</a>
      </div>
    </div>
  );
}

export default SideBar;