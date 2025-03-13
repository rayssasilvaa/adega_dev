import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Maingrid from './components/Main';
import Destilados from './components/pages/Destilados';
import Cervejas from './components/pages/Cervejas';
import Refrigerantes from './components/pages/Refrigerantes';
import Variedades from './components/pages/Variedades'
import Login from './components/pages/Login';
import Car from './components/pages/Car'
import Footer from './components/Footer';

import './styles/main.sass'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Maingrid />} />
        <Route path="/destilados" element={<Destilados />} />
        <Route path="/cervejas" element={<Cervejas />} />
        <Route path="/refrigerantes" element={<Refrigerantes />} />
        <Route path="/variedades" element={<Variedades />} />
        <Route path="/login" element={<Login />} />
        <Route path="/car" element={<Car />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
