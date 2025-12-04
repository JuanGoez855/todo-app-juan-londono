import React from 'react';
import { Link } from 'react-router-dom';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => onToggle(todo.id, todo.completed)} 
      />

      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>

      <Link to={`/editar/${todo.id}`}>
        <button>Editar</button>
      </Link>

      <button onClick={() => onDelete(todo.id)}>Eliminar</button>
    </li>
  );
}

