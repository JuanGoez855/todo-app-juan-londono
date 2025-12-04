import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Todos from './components/Todos';
import Registro from './components/Registro';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/todos">Mis Todos</Link>
          <Link to="/registro">Registro</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/registro" element={<Registro />} />

          {/* Nueva ruta para editar */}
          <Route path="/editar/:id" element={<EditTodo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


