const express = require('express');
const cors = require('cors');
const { db, initDatabase } = require('./db');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware pipeline:
// 1) cors: allows browser app on a different port (5173) to call this API.
// 2) express.json: parses JSON bodies into req.body.
app.use(cors());
app.use(express.json());

initDatabase();

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// READ all lessons from SQL, return JSON to React.
app.get('/api/lessons', (req, res) => {
  db.all('SELECT * FROM lessons ORDER BY id DESC', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// CREATE one lesson from React form submission.
app.post('/api/lessons', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'title and description are required' });
  }

  const query = 'INSERT INTO lessons (title, description, completed) VALUES (?, ?, 0)';
  db.run(query, [title, description], function insertCallback(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    db.get('SELECT * FROM lessons WHERE id = ?', [this.lastID], (getErr, row) => {
      if (getErr) {
        return res.status(500).json({ error: getErr.message });
      }
      res.status(201).json(row);
    });
  });
});

// UPDATE one boolean field to demonstrate PUT and SQL UPDATE.
app.put('/api/lessons/:id/toggle', (req, res) => {
  const { id } = req.params;

  db.get('SELECT * FROM lessons WHERE id = ?', [id], (findErr, lesson) => {
    if (findErr) {
      return res.status(500).json({ error: findErr.message });
    }
    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    const nextCompleted = lesson.completed ? 0 : 1;
    db.run(
      'UPDATE lessons SET completed = ? WHERE id = ?',
      [nextCompleted, id],
      (updateErr) => {
        if (updateErr) {
          return res.status(500).json({ error: updateErr.message });
        }

        db.get('SELECT * FROM lessons WHERE id = ?', [id], (getErr, updated) => {
          if (getErr) {
            return res.status(500).json({ error: getErr.message });
          }
          res.json(updated);
        });
      }
    );
  });
});

// DELETE route rounds out basic CRUD.
app.delete('/api/lessons/:id', (req, res) => {
  db.run('DELETE FROM lessons WHERE id = ?', [req.params.id], function deleteCallback(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (this.changes === 0) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    res.status(204).send();
  });
});

app.listen(PORT, () => {
  console.log(`Education API listening on http://localhost:${PORT}`);
});
