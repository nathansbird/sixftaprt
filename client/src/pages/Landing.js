import React from 'react';

import NavBar from '../components/landing/NavBar';
import Footer from '../components/landing/Footer';
import SideBar from '../components/landing/SideBar';
import Center from '../components/landing/Center';

function Landing() {
  return (
    <div>
      <NavBar />
      <Center />
      <SideBar />
      <Footer />
    </div>
  );
}

export default Landing;