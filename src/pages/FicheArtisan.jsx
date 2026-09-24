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
    fetch(`http://localhost:3000/api/artisans/${id}`)
      .then((reponse) => reponse.json())
      .then((donnees) => setArtisan(donnees));
  }, [id]);

  const envoyerFormulaire = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/api/artisans/${id}/contact`, {
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
    return <p>Chargement...</p>;
  }

  return (
    <main>
      <h1>{artisan.nom}</h1>
      <p>Note : {artisan.note} / 5</p>
      <p>{artisan.Specialite.nom}</p>
      <p>{artisan.ville}</p>
      <p>{artisan.a_propos}</p>
      {artisan.site_web && <a href={artisan.site_web}>{artisan.site_web}</a>}

      <h2>Contacter cet artisan</h2>
      <form onSubmit={envoyerFormulaire}>
        <input
          type="text"
          placeholder="Votre nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Objet"
          value={objet}
          onChange={(e) => setObjet(e.target.value)}
          required
        />
        <textarea
          placeholder="Votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Envoyer</button>
      </form>
      {statutEnvoi && <p>{statutEnvoi}</p>}
    </main>
  );
}

export default FicheArtisan;