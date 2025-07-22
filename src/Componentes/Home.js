import React from 'react';

function Home() {
  return (
    <div className="home">

      {/* Hero section */}
      <section className="hero">
        <img src="./img/FotoInicio.jpg" alt="Distingue tu empresa" className="hero-img" />
        <h1 className="hero-title">Distingue tu Empresa</h1>
      </section>

      {/* Catálogo de colegios */}
      <section className="catalogo-colegios">
        <div className="colegio-card">
          <img src="/img/inglés.png" alt="Colegio Inglés" />
          <p>COLEGIO INGLÉS</p>
        </div>
        <div className="colegio-card">
          <img src="/img/villarica.png" alt="Colegio Villa Rica" />
          <p>COLEGIO VILLA RICA</p>
        </div>
        <div className="colegio-card">
          <img src="/img/americano.png" alt="Colegio Americano" />
          <p>COLEGIO AMERICANO DE VERACRUZ</p>
        </div>
        <div className="colegio-card">
          <img src="/img/anatiri.png" alt="Colegio ANATRI" />
          <p>COLEGIO ANATRI</p>
        </div>
      </section>

      {/* Botón */}
      <div className="catalogo-boton">
        <button>VER UNIFORMES ESCOLARES</button>
      </div>

    </div>
  );
}

export default Home;
