import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FicheArtisan() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [objet, setObjet] = useState('');
  const [message, setMessage] = useState('');
  const [statutEnvoi, setStatutEnvoi] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/artisans/${id}`)
      .then((reponse) => reponse.json())
      .then((donnees) => setArtisan(donnees));
  }, [id]);

  const envoyerFormulaire = (e) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/artisans/${id}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom, email, objet, message }),
    })
      .then((reponse) => reponse.json())
      .then((donnees) => {
        setStatutEnvoi(donnees.message);
        setNom('');
        setEmail('');
        setObjet('');
        setMessage('');
      });
  };

  if (!artisan) {
    return <p className="container py-5">Chargement...</p>;
  }

  return (
    <main className="container py-5">
      <div className="row g-4">
        {/* Colonne infos artisan */}
        <section className="col-lg-6">
          <div className="card shadow-sm border-0 h-100 p-4">
            <h1 className="h2 mb-3">{artisan.nom}</h1>
            <p className="mb-1">
              <strong>Note :</strong> {artisan.note} / 5
            </p>
            <p className="mb-1">
              <strong>Spécialité :</strong> {artisan.specialite?.nom}
            </p>
            <p className="mb-3">
              <strong>Ville :</strong> {artisan.ville}
            </p>
            <h2 className="h5">À propos</h2>
            <p>{artisan.a_propos}</p>
            {artisan.site_web && (
              <a href={artisan.site_web} target="_blank" rel="noopener noreferrer">
                Visiter le site web
              </a>
            )}
          </div>
        </section>

        {/* Colonne formulaire */}
        <section className="col-lg-6">
          <div className="card shadow-sm border-0 p-4">
            <h2 className="h4 mb-4">Contacter cet artisan</h2>

            {statutEnvoi && (
              <div className="alert alert-success" role="status">
                {statutEnvoi}
              </div>
            )}

            <form onSubmit={envoyerFormulaire}>
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  className="form-control"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="objet" className="form-label">
                  Objet
                </label>
                <input
                  type="text"
                  id="objet"
                  className="form-control"
                  value={objet}
                  onChange={(e) => setObjet(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="form-control"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-brand w-100">
                Envoyer
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default FicheArtisan;