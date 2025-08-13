// configura as rotas e navegacao
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Usuarios from './pages/Usuarios';
import Home from './pages/Home';
import Contador from './pages/Contador';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <nav>
          | <Link to="/">Home</Link> | <Link to="/usuarios">Usuários</Link> | <Link to="/contador">Contador</Link> |
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/contador" element={<Contador />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
