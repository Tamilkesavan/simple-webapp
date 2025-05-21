const express = require('express');
const app = express();
const port = 8080;

// Serve static frontend files from 'public' folder
app.use(express.static('public'));

// API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});