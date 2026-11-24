import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Rodape from './components/Rodape/Rodape';
import Home from './pages/Home/Home';
import Catalogo from './pages/Catalogo/Catalogo';
import Sobre from './pages/Sobre/Sobre';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
