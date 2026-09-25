import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  const [categories, setCategories] = useState([]);
  const [recherche, setRecherche] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/menu`)
      .then((reponse) => reponse.json())
      .then((donnees) => setCategories(donnees));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recherche.trim() === '') return;
    navigate(`/artisans?recherche=${encodeURIComponent(recherche)}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Trouve ton artisan - Région Auvergne-Rhône-Alpes" className="logo"/>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Ouvrir le menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav mx-auto gap-lg-4 mb-3 mb-lg-0">
            {categories.map((cat) => (
              <li className="nav-item" key={cat.id_categorie}>
                <Link to={`/artisans?categorie=${cat.nom}`} className="nav-link">
                  {cat.nom}
                </Link>
              </li>
            ))}
          </ul>

          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Rechercher"
              className="form-control recherche"
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              aria-label="Rechercher un artisan"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;