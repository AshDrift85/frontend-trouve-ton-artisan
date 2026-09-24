import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

function ListeArtisans() {
  const [artisans, setArtisans] = useState([]);
  const [searchParams] = useSearchParams();

  const categorie = searchParams.get('categorie');
  const recherche = searchParams.get('recherche');

  useEffect(() => {
    let url = 'http://localhost:3000/api/artisans';
    const params = new URLSearchParams();

    if (categorie) params.append('categorie', categorie);
    if (recherche) params.append('recherche', recherche);

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    fetch(url)
      .then((reponse) => reponse.json())
      .then((donnees) => setArtisans(donnees));
  }, [categorie, recherche]);

  return (
    <main className="container py-5">
      <h1 className="mb-4" style={{ color: '#00497c' }}>
        {categorie ? `Artisans — ${categorie}` : 'Tous les artisans'}
      </h1>

      {artisans.length === 0 && <p>Aucun artisan trouvé.</p>}

      <div className="row g-4">
        {artisans.map((artisan) => (
          <div className="col-12 col-md-6 col-lg-4" key={artisan.id_artisan}>
            <Link to={`/artisans/${artisan.id_artisan}`} className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h2 className="card-title h5">{artisan.nom}</h2>
                  <p className="card-text mb-1">Note : {artisan.note} / 5</p>
                  <p className="card-text mb-1 text-muted">{artisan.Specialite.nom}</p>
                  <p className="card-text text-muted">{artisan.ville}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ListeArtisans;