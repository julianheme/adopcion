import React from 'react';
import Titulo from './components/titulo';
import BannerP from './components/banners/bannerP';
import Contacto from './pages/contacto/contacto';

function App() {
  return (
    <div>
      <BannerP/>
      <Titulo titulo="Adopción"/>
      <Contacto />
    </div>
  );
}

export default App;
