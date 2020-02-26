import React from 'react';
import './App.css';

import Promo from 'modules/Promo';
import Peer from 'modules/Peer';
import Platform from 'modules/Platform';
import Marketplace from 'modules/Marketplace';
import Solutions from 'modules/Solutions';
import What from 'modules/What';
import Case from 'modules/Case';
import Team from 'modules/Team';
import Partners from 'modules/Partners';
import Faq from 'modules/Faq';
import Stay from 'modules/Stay';
import Footer from 'modules/Footer';

function App() {
  return (
    <main>
      <Promo />
      <Peer />
      <Platform />
      <Marketplace />
      <Solutions />
      <What />
      <Case />
      <Team />
      <Partners />
      <Faq />
      <Stay />
      <Footer />
    </main>
  );
}

export default App;
