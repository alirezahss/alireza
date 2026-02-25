import { useEffect, useState } from 'react';
import { createLesson, deleteLesson, fetchLessons, toggleLesson } from './api';

export default function App() {
  // Local UI state. React re-renders when these values change.
  const [lessons, setLessons] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // useEffect runs after first render, so this is our "load from API" step.
  useEffect(() => {
    loadLessons();
  }, []);

  async function loadLessons() {
    try {
      setLoading(true);
      setError('');
      const data = await fetchLessons();
      setLessons(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError('');
      const newLesson = await createLesson({ title, description });

      // Optimistic UI update: prepend the new row to current state.
      setLessons((previous) => [newLesson, ...previous]);
      setTitle('');
      setDescription('');
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleToggle(id) {
    try {
      const updated = await toggleLesson(id);
      setLessons((previous) =>
        previous.map((lesson) => (lesson.id === id ? updated : lesson))
      );
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteLesson(id);
      setLessons((previous) => previous.filter((lesson) => lesson.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="page">
      <section className="card">
        <h1>Full-Stack Learning Tracker</h1>
        <p>
          This React app talks to an Express API, and that API stores data in SQLite.
          Open the code comments to follow each layer.
        </p>

        <form onSubmit={handleSubmit} className="form">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Lesson title (frontend state)"
            required
          />
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="What did you learn about frontend ↔ backend ↔ database?"
            required
          />
          <button type="submit">Add Lesson</button>
        </form>

        {loading && <p>Loading lessons from API...</p>}
        {error && <p className="error">Error: {error}</p>}

        <ul className="list">
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <div>
                <strong>{lesson.title}</strong>
                <p>{lesson.description}</p>
                <small>Created at: {lesson.created_at}</small>
              </div>
              <div className="actions">
                <button onClick={() => handleToggle(lesson.id)}>
                  {lesson.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button className="danger" onClick={() => handleDelete(lesson.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
