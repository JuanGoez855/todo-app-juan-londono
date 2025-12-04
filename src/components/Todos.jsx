// src/components/Todos.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadTodos(); }, []);

  const loadTodos = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/todos');
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      alert('Error al cargar los todos');
    } finally {
      setLoading(false);
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      const res = await fetch(`http://localhost:3001/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !completed })
      });
      if (res.ok) {
        setTodos(todos.map(t => t.id === id ? { ...t, completed: !completed } : t));
      } else {
        alert('Error actualizando');
      }
    } catch (err) {
      alert('Error de conexión');
    }
  };

  const deleteTodo = async (id) => {
  if (!window.confirm('¿Eliminar este todo?')) return;
  try {
    const res = await fetch(`http://localhost:3001/todos/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setTodos(todos.filter(t => t.id !== id));
    } else {
      alert('Error al eliminar');
    }
  } catch (err) {
    alert('Error de conexión');
  }
};

  if (loading) return <div>Cargando todos...</div>;

  return (
    <div>
      <h2>Mis Todos</h2>
      <Link to="/registro">+ Agregar Nuevo Todo</Link>
      {todos.length === 0 ? <p>No hay todos todavía.</p> : (
        <ul>
          {todos.map(t => (
            <li key={t.id}>
              <input type="checkbox" checked={t.completed} onChange={() => toggleComplete(t.id, t.completed)} />
              <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>{t.title}</span>
            </li>
          ))}
          <button onClick={() => deleteTodo(t.id)}>Eliminar</button>
        </ul>
      )}
    </div>
  );
}
