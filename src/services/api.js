// src/services/api.js
const BASE = 'http://localhost:3001/todos';

export async function getTodos() {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error('Error fetching todos');
  return res.json();
}

export async function createTodo(payload) {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Error creating todo');
  return res.json();
}

export async function patchTodo(id, patch) {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patch)
  });
  if (!res.ok) throw new Error('Error updating todo');
  return res.json();
}

export async function removeTodo(id) {
  const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Error deleting todo');
  return true;
}
