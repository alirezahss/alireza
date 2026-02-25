const API_BASE_URL = 'http://localhost:4000/api';

/**
 * This file centralizes HTTP calls.
 * Why that's useful educationally:
 * - Components focus on UI logic.
 * - API details stay in one place.
 */
export async function fetchLessons() {
  const response = await fetch(`${API_BASE_URL}/lessons`);
  if (!response.ok) {
    throw new Error('Failed to load lessons');
  }
  return response.json();
}

export async function createLesson(payload) {
  const response = await fetch(`${API_BASE_URL}/lessons`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorBody = await response.json();
    throw new Error(errorBody.error || 'Failed to create lesson');
  }

  return response.json();
}

export async function toggleLesson(id) {
  const response = await fetch(`${API_BASE_URL}/lessons/${id}/toggle`, {
    method: 'PUT'
  });

  if (!response.ok) {
    throw new Error('Failed to toggle lesson');
  }

  return response.json();
}

export async function deleteLesson(id) {
  const response = await fetch(`${API_BASE_URL}/lessons/${id}`, {
    method: 'DELETE'
  });

  if (!response.ok) {
    throw new Error('Failed to delete lesson');
  }
}
