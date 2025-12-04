// src/components/EditTodo.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTodos } from '../services/api';

export default function EditTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const all = await getTodos();
        const t = all.find(x => x.id === Number(id));
        if (t) setTitle(t.title);
      } catch (err) {
        alert('Error cargando todo');
      }
    }
    load();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: patch logic to implement in next iteration
    alert('Funcionalidad de editar aún no implementada (placeholder)');
    navigate('/todos');
  };

  return (
    <div>
      <h2>Editar Todo (placeholder)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <button type="submit">Guardar (placeholder)</button>
      </form>
    </div>
  );
}
