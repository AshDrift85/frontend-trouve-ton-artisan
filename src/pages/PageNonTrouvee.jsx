import { Link } from 'react-router-dom';

function PageNonTrouvee() {
  return (
    <main className="container py-5 text-center">
      <h1 style={{ color: '#00497c' }}>404</h1>
      <p className="mb-4">Cette page n'existe pas.</p>
      <Link to="/" className="btn" style={{ backgroundColor: '#0074c7', color: 'white' }}>
        Retour à l'accueil
      </Link>
    </main>
  );
}

export default PageNonTrouvee;