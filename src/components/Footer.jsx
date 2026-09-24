import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white p-4 mt-5">
      <div className="d-flex flex-wrap justify-content-between">
        <nav>
          <ul className="d-flex list-unstyled gap-3 mb-3">
            <li><Link to="/mentions-legales" className="text-white-50 text-decoration-none">Mentions légales</Link></li>
            <li><Link to="/donnees-personnelles" className="text-white-50 text-decoration-none">Données personnelles</Link></li>
            <li><Link to="/accessibilite" className="text-white-50 text-decoration-none">Accessibilité</Link></li>
            <li><Link to="/cookies" className="text-white-50 text-decoration-none">Cookies</Link></li>
          </ul>
        </nav>

        <address className="text-white-50 fst-normal small">
          Région Auvergne-Rhône-Alpes<br />
          101 cours Charlemagne<br />
          CS 20033<br />
          69269 LYON CEDEX 02<br />
          France<br />
          +33 (0)4 26 73 40 00
        </address>
      </div>
    </footer>
  );
}

export default Footer;