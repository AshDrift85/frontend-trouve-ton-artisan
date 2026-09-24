import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/menu')
      .then((reponse) => reponse.json())
      .then((donnees) => setCategories(donnees));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Trouve ton artisan" style={{ height: '50px' }} />
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

          <form className="d-flex" role="search">
            <input
              type="search"
              placeholder="Rechercher un artisan..."
              className="form-control"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;