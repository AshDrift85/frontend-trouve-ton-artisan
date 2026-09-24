import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import ListeArtisans from './pages/ListeArtisans';
import FicheArtisan from './pages/FicheArtisan';
import PageNonTrouvee from './pages/PageNonTrouvee';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/artisans" element={<ListeArtisans />} />
        <Route path="/artisans/:id" element={<FicheArtisan />} />
        <Route path="*" element={<PageNonTrouvee />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;