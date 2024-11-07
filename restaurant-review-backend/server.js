import express from 'express';
import cors from 'cors';
import connection from './db.js';

const app = express();
const PORT = 5000; // You can choose any available port

// Use CORS middleware
app.use(cors());

// Endpoint to get restaurants
app.get('/api/restaurants', (req, res) => {
  const query = 'SELECT name, location FROM Restaurants';
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 