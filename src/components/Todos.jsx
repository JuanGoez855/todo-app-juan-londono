// src/components/Todos.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:3001/todos');
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        console.error('Error cargando todos', err);
        alert('Error al cargar los todos');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div>Cargando todos...</div>;

  return (
    <div>
      <h2>Mis Todos</h2>
      <Link to="/registro">+ Agregar Nuevo Todo</Link>
      {todos.length === 0 ? (
        <p>No hay todos todavía.</p>
      ) : (
        <ul>
          {todos.map(t => (
            <li key={t.id}>
              <strong>{t.title}</strong> {t.completed ? '(completado)' : '(pendiente)'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
