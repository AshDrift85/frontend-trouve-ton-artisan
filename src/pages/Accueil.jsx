import { useState, useEffect } from 'react';

function Accueil() {
  const [artisansTop, setArtisansTop] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/artisans/top')
      .then((reponse) => reponse.json())
      .then((donnees) => setArtisansTop(donnees));
  }, []);

  return (
    <main className="container py-5">
      <section className="mb-5">
        <h2 className="text-center mb-4" style={{ color: '#00497c' }}>
          Comment trouver mon artisan ?
        </h2>
        <div className="row text-center g-4">
          <div className="col-6 col-lg-3">
            <div className="fs-1 fw-bold" style={{ color: '#0074c7' }}>1</div>
            <p>Choisir la catégorie d'artisanat dans le menu.</p>
          </div>
          <div className="col-6 col-lg-3">
            <div className="fs-1 fw-bold" style={{ color: '#0074c7' }}>2</div>
            <p>Choisir un artisan.</p>
          </div>
          <div className="col-6 col-lg-3">
            <div className="fs-1 fw-bold" style={{ color: '#0074c7' }}>3</div>
            <p>Le contacter via le formulaire de contact.</p>
          </div>
          <div className="col-6 col-lg-3">
            <div className="fs-1 fw-bold" style={{ color: '#0074c7' }}>4</div>
            <p>Une réponse sera apportée sous 48h.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-center mb-4" style={{ color: '#00497c' }}>
          Les artisans du mois
        </h2>
        <div className="row g-4">
          {artisansTop.map((artisan) => (
            <div className="col-12 col-md-4" key={artisan.id_artisan}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title h5">{artisan.nom}</h3>
                  <p className="card-text mb-1">Note : {artisan.note} / 5</p>
                  <p className="card-text mb-1 text-muted">{artisan.Specialite.nom}</p>
                  <p className="card-text text-muted">{artisan.ville}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Accueil;