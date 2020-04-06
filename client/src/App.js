import React from 'react';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Center from './components/Center';

function App() {
  return (
    <div>
      <NavBar />
      <Center />
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;
