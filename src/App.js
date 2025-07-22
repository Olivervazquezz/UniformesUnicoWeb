import React from 'react';
import './Estilos/App.css';
import './Estilos/Navbar.css';
import './Estilos/Footer.css';
import './Estilos/Home.css';

import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
