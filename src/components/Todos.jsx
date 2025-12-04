// src/components/Todos.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('http://localhost:3001/todos');
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        console.error('Error cargando todos', err);
      }
    };
    load();
  }, []);

  return (
    <div>
      <h2>Mis Todos</h2>
      <Link to="/registro">+ Agregar Nuevo Todo</Link>
      <ul>
        {todos.map(t => <li key={t.id}>{t.title}</li>)}
      </ul>
    </div>
  );
}
