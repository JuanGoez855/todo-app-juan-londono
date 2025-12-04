import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TodoItem from './TodoItem';
import Filters from './Filters';
import { getTodos, patchTodo, removeTodo } from '../services/api';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await getTodos();
      setTodos(data);
    } finally {
      setLoading(false);
    }
  };

  const toggleComplete = async (id, completed) => {
    await patchTodo(id, { completed: !completed });
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !completed } : t));
  };

  const deleteTodo = async (id) => {
    if (!window.confirm('¿Eliminar este todo?')) return;
    await removeTodo(id);
    setTodos(todos.filter(t => t.id !== id));
  };

  if (loading) return <div>Cargando todos...</div>;

  return (
    <div>
      <h2>Mis Todos</h2>
      <Link to="/registro">+ Agregar Nuevo Todo</Link>

      {/* FILTROS (placeholder) */}
      <Filters onFilter={() => alert('Filtrado pendiente')} />

      {todos.length === 0 ? (
        <p>No hay todos todavía.</p>
      ) : (
        <ul>
          {todos.map(t => (
            <TodoItem
              key={t.id}
              todo={t}
              onToggle={toggleComplete}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
