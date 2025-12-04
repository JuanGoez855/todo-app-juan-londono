// src/components/Registro.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registro() {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Por favor escribe un título');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title.trim(), completed: false })
      });
      if (res.ok) {
        navigate('/todos');
      } else {
        alert('Error al crear el todo');
      }
    } catch (err) {
      alert('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Agregar Nuevo Todo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input value={title} onChange={e => setTitle(e.target.value)} disabled={loading} />
        </div>
        <div>
          <button type="submit" disabled={loading}>{loading ? 'Guardando...' : 'Agregar Todo'}</button>
          <button type="button" onClick={() => navigate('/todos')} disabled={loading}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
