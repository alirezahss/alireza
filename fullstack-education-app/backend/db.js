const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// We keep data in a local file so the API remembers records between restarts.
const dbPath = path.join(__dirname, 'education.db');
const db = new sqlite3.Database(dbPath);

/**
 * initDatabase teaches an important full-stack concept:
 * - On server startup, we make sure our table exists.
 * - SQL schema lives in the backend, independent from React UI.
 */
function initDatabase() {
  db.serialize(() => {
    db.run(
      `CREATE TABLE IF NOT EXISTS lessons (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        completed INTEGER NOT NULL DEFAULT 0,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )`
    );

    // Seed data helps you see something immediately in the UI.
    db.get('SELECT COUNT(*) as count FROM lessons', (err, row) => {
      if (err) {
        console.error('Error checking seed data:', err.message);
        return;
      }

      if (row.count === 0) {
        const seedStmt = db.prepare(
          'INSERT INTO lessons (title, description, completed) VALUES (?, ?, ?)'
        );

        seedStmt.run(
          'Connect the layers',
          'Frontend calls API routes. API runs SQL queries. Database stores rows.',
          0
        );
        seedStmt.run(
          'Read data flow',
          'React state updates when API responses come back as JSON.',
          0
        );
        seedStmt.finalize();
      }
    });
  });
}

module.exports = { db, initDatabase };
