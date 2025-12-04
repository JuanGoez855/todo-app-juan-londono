// src/components/Filters.jsx
import React from 'react';

export default function Filters({ onFilter }) {
  return (
    <div>
      <button onClick={() => onFilter('all')}>Todos</button>
      <button onClick={() => onFilter('completed')}>Completados</button>
      <button onClick={() => onFilter('pending')}>Pendientes</button>
      <p>Nota: lógica de filtrado pendiente (placeholder).</p>
    </div>
  );
}
